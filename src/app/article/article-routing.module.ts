import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  { path: 'new-article', component: NewArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
