import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRelationshipComponent } from './article-relationship.component';

describe('ArticleRelationshipComponent', () => {
  let component: ArticleRelationshipComponent;
  let fixture: ComponentFixture<ArticleRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
