import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ArticleRoutingModule } from './article-routing.module';

import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleRelationshipComponent } from './article-relationship/article-relationship.component';
import { ArticleFormComponent } from './article-form/article-form.component';

// Filters
import { FilterSubcategoriesPipe } from './filter-subcategories.pipe';

@NgModule({
  imports: [
    CommonModule, ArticleRoutingModule, ReactiveFormsModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
  ],
  exports: [
    NewArticleComponent
  ],
  declarations: [
    NewArticleComponent, ArticleFormComponent, 
    ArticleRelationshipComponent, 
    FilterSubcategoriesPipe
  ]
})
export class ArticleModule {}
