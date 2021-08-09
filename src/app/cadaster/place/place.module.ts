import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../common/material/material.module';

import { PlaceService } from './place.service';

import { PlaceMainComponent } from './place-main/place-main.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceListComponent } from './place-list/place-list.component';

@NgModule({
  declarations: [PlaceDetailComponent, PlaceMainComponent, PlaceFormComponent, PlaceListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [PlaceMainComponent],
  providers: [PlaceService],
})
export class PlaceModule {}
