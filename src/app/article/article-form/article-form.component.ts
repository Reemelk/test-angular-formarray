import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFormComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() sections: any[];

  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<FormGroup> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event): void {
    this.submit.emit(this.parent);
  }

  onAddCategory(event): void {
    this.add.emit(event);
  }

  onRemoveCategory(event): void {
    this.remove.emit(event);
  }
  
  /**
   * categories
   * * simple getter to keep html template cleaner
  */
  get categories(): FormArray {
    return this.parent.get('categories') as FormArray;
  }

  /**
   * subcategories
   * * simple getter to keep html template cleaner
  */
  get subcategories(): FormArray {
    return this.parent.get('categories.subcategories') as FormArray;
  }
}