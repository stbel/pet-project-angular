import { PlaceRoutingModule } from './place-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../common/material/material.module';

import { PlaceService } from './place.service';

import { PlaceMainComponent } from './place-main/place-main.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceDashboardComponent } from './place-dashboard/place-dashboard.component';

@NgModule({
  declarations: [
    PlaceDetailComponent,
    PlaceMainComponent,
    PlaceFormComponent,
    PlaceListComponent,
    PlaceDashboardComponent,
  ],
  imports: [CommonModule, MaterialModule, PlaceRoutingModule],
  providers: [PlaceService],
})
export class PlaceModule {}
