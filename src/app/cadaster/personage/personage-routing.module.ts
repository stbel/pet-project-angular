import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonageDetailComponent } from './personage-detail/personage-detail.component';
import { PersonageFormComponent } from './personage-form/personage-form.component';
import { PersonageListComponent } from './personage-list/personage-list.component';
import { PersonageDashboardComponent } from './personage-dashboard/personage-dashboard.component';
import { PersonageMainComponent } from './personage-main/personage-main.component';

const PERSONAGE_ROUTES: Routes = [
  {
    path: 'personage',
    component: PersonageMainComponent,
    children: [
      { path: '', component: PersonageDashboardComponent },
      { path: 'list', component: PersonageListComponent },
      { path: 'form', component: PersonageFormComponent },
      { path: 'detail', component: PersonageDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(PERSONAGE_ROUTES)],
  exports: [RouterModule],
})
export class PersonageRoutingModule {}
