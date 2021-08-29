import { ArtifactDashboardComponent } from './artifact-dashboard/artifact-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtifactListComponent } from './artifact-list/artifact-list.component';
import { ArtifactFormComponent } from './artifact-form/artifact-form.component';
import { ArtifactDetailComponent } from './artifact-detail/artifact-detail.component';
import { ArtifactMainComponent } from './artifact-main/artifact-main.component';

const ARTIFACT_ROUTES: Routes = [
  {
    path: 'artifact',
    component: ArtifactMainComponent,
    children: [
      { path: '', component: ArtifactDashboardComponent },
      { path: 'list', component: ArtifactListComponent },
      { path: 'form', component: ArtifactFormComponent },
      { path: 'detail', component: ArtifactDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ARTIFACT_ROUTES)],
  exports: [RouterModule],
})
export class ArtifactRoutingModule {}
