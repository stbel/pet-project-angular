import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryFormComponent } from './story-form/story-form.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryDashboardComponent } from './story-dashboard/story-dashboard.component';
import { StoryMainComponent } from './story-main/story-main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const STORY_ROUTES: Routes = [
  {
    path: 'story',
    component: StoryMainComponent,
    children: [
      { path: '', component: StoryDashboardComponent },
      { path: 'list', component: StoryListComponent },
      { path: 'form', component: StoryFormComponent },
      { path: 'detail', component: StoryDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(STORY_ROUTES)],
  exports: [RouterModule],
})
export class StoryRoutingModule {}
