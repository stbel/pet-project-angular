import { MaterialModule } from './../../common/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectiveService } from './collective.service';

import { CollectiveMainComponent } from './collective-main/collective-main.component';
import { CollectiveDetailComponent } from './collective-detail/collective-detail.component';
import { CollectiveFormComponent } from './collective-form/collective-form.component';
import { CollectiveListComponent } from './collective-list/collective-list.component';

@NgModule({
  declarations: [
    CollectiveFormComponent,
    CollectiveMainComponent,
    CollectiveDetailComponent,
    CollectiveListComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [CollectiveMainComponent],
  providers: [CollectiveService],
})
export class CollectiveModule {}
