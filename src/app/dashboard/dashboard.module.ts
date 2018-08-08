import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

import { MostReadArticlesComponent } from './most-read-articles/most-read-articles.component';
import { UsersOnlineComponent } from './users-online/users-online.component';
import { MostRecentArticlesComponent } from './most-recent-articles/most-recent-articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ReporterStatsComponent } from './reporter-stats/reporter-stats.component';


@NgModule({
  imports: [
    CommonModule, DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    MostReadArticlesComponent, MostRecentArticlesComponent, DashboardComponent, 
    UsersOnlineComponent, ArticleDetailsComponent, ReporterStatsComponent
  ]
})
export class DashboardModule { }
