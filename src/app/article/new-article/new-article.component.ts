import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const CategoriesWithSubcategories = gql`
  query Sections {
    categories {
      id
      name
      subcategories {
        id
        name
      }
    }
  }
`;

@Component({
  selector: 'new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  form: FormGroup;
  subs$: Observable<any[]>;
  // Mock data
  categories$: Observable<any> = of([
    {
      id: 1,
      name: 'Musique',
      subcategories: [
        { id: 1, name: 'Trap' },
        { id: 2, name: 'Pop Urbaine' },
        { id: 3, name: 'R\'n\'B' }
      ]
    },
    {
      id: 2,
      name: 'Sport',
      subcategories: [
        { id: 4, name: 'Football' },
        { id: 5, name: 'Rugby' },
        { id: 6, name: 'Handball' }
      ]
    }
  ]);

  constructor(private fb: FormBuilder, private apollo: Apollo) {}

  ngOnInit() {
    // this.categories$ = this.apollo
    //                             .watchQuery<Category[]>({query: CategoriesWithSubcategories})
    //                             .valueChanges
    //                             .pipe(map(res => res.data));
    this.CreateArticleForm();
  }

  addCategory(): void {
    this.categories.push(this.createCategory());
  }

  removeCategory(index: number): void {
    this.categories.removeAt(index);
  }

  createArticle(article: FormGroup) {
    console.log(article.value);
  }

  /**
   * categories
   * * simple getter to keep html template cleaner
  */
  get categories(): FormArray {
    return this.form.get('categories') as FormArray;
  }

  /**
   * subcategories
   * * simple getter to keep html template cleaner
  */
  get subcategories(): FormArray {
    return this.form.get('categories.subcategories') as FormArray;
  }

  /**
   * createCatgory
   * * Add a category in formArray 
   */
  private createCategory(): FormGroup {
    let newForm = new FormGroup({
      id: new FormControl(null, Validators.required),
      subcategories: new FormArray([])
    })
    return newForm;
  }

  /**
   * CreateArticleForm
   * * Create form so that it keeps ngOnit clean
   */
  private CreateArticleForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      categories: new FormArray([this.createCategory()])
    });
  }
}
