import { CollectiveRoutingModule } from './collective-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../common/material/material.module';

import { CollectiveService } from './collective.service';

import { CollectiveMainComponent } from './collective-main/collective-main.component';
import { CollectiveDetailComponent } from './collective-detail/collective-detail.component';
import { CollectiveFormComponent } from './collective-form/collective-form.component';
import { CollectiveListComponent } from './collective-list/collective-list.component';
import { CollectiveDashboardComponent } from './collective-dashboard/collective-dashboard.component';

@NgModule({
  declarations: [
    CollectiveFormComponent,
    CollectiveMainComponent,
    CollectiveDetailComponent,
    CollectiveListComponent,
    CollectiveDashboardComponent,
  ],
  imports: [CommonModule, MaterialModule, CollectiveRoutingModule],
  providers: [CollectiveService],
})
export class CollectiveModule {}
