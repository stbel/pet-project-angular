import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceDashboardComponent } from './place-dashboard/place-dashboard.component';
import { PlaceMainComponent } from './place-main/place-main.component';

const PLACE_ROUTES: Routes = [
  {
    path: 'place',
    component: PlaceMainComponent,
    children: [
      { path: '', component: PlaceDashboardComponent },
      { path: 'list', component: PlaceListComponent },
      { path: 'form', component: PlaceFormComponent },
      { path: 'detail', component: PlaceDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(PLACE_ROUTES)],
  exports: [RouterModule],
})
export class PlaceRoutingModule {}
