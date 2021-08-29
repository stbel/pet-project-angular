import { ArtifactRoutingModule } from './artifact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../../common/material/material.module';

import { ArtifactService } from './artifact.service';

import { ArtifactMainComponent } from './artifact-main/artifact-main.component';
import { ArtifactDetailComponent } from './artifact-detail/artifact-detail.component';
import { ArtifactFormComponent } from './artifact-form/artifact-form.component';
import { ArtifactListComponent } from './artifact-list/artifact-list.component';
import { ArtifactDashboardComponent } from './artifact-dashboard/artifact-dashboard.component';

@NgModule({
  declarations: [
    ArtifactFormComponent,
    ArtifactMainComponent,
    ArtifactDetailComponent,
    ArtifactListComponent,
    ArtifactDashboardComponent,
  ],
  imports: [CommonModule, FormsModule, MaterialModule, ArtifactRoutingModule],
  exports: [ArtifactRoutingModule],
  providers: [ArtifactService],
})
export class ArtifactModule {}
