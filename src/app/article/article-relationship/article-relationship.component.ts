import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormArray } from '@angular/forms';

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

  categoryId: number = null;

  constructor() {}

  ngOnInit() {
  }

  addCategory(): void {
    this.add.emit();
  }

  selectedCategory(categoryID: number): void {
    this.categoryId = this.categories.controls[categoryID].value.id;
  }
}
