import { StoryRoutingModule } from './story-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../common/material/material.module';

import { StoryMainComponent } from './story-main/story-main.component';
import { StoryDashboardComponent } from './story-dashboard/story-dashboard.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryFormComponent } from './story-form/story-form.component';

@NgModule({
  declarations: [
    StoryMainComponent,
    StoryDashboardComponent,
    StoryDetailComponent,
    StoryListComponent,
    StoryFormComponent
  ],
  imports: [
    CommonModule, MaterialModule, StoryRoutingModule
  ]
})
export class StoryModule { }
