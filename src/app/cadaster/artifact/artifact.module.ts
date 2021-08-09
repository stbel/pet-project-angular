import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../common/material/material.module';

import { ArtifactService } from './artifact.service';

import { ArtifactMainComponent } from './artifact-main/artifact-main.component';
import { ArtifactDetailComponent } from './artifact-detail/artifact-detail.component';
import { ArtifactFormComponent } from './artifact-form/artifact-form.component';
import { ArtifactListComponent } from './artifact-list/artifact-list.component';

@NgModule({
  declarations: [
    ArtifactFormComponent,
    ArtifactMainComponent,
    ArtifactDetailComponent,
    ArtifactListComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [ArtifactMainComponent],
  providers: [ArtifactService],
})
export class ArtifactModule {}
