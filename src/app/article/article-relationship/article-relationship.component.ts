import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'article-relationship',
  templateUrl: './article-relationship.component.html',
  styleUrls: ['./article-relationship.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleRelationshipComponent implements OnInit {
  @Input() categories: FormArray;
  @Input() sections: any[];

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  public categoriesLength(): boolean {
    return this.categories.controls.length > 1 ? false : true;
  }

  addCategory(): void {
    this.add.emit();
  }

  removeCategory(index: number): void {
    this.remove.emit(index);
  }

  checkedSubs(indexCat: number, valueSub: number): void {
    const subsArray = this.categories.controls[indexCat]['controls']['subcategories'];
    // check if checkboxed value doesn't exist in the array 
    const indexSubsChecked = subsArray.value.findIndex(x => x == valueSub);
    if (indexSubsChecked === -1) {
      subsArray.push(new FormControl(valueSub));
    } else {
      subsArray.removeAt(indexSubsChecked);
    }
  }
}
