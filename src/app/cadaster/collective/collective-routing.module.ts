import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectiveDetailComponent } from './collective-detail/collective-detail.component';
import { CollectiveFormComponent } from './collective-form/collective-form.component';
import { CollectiveDashboardComponent } from './collective-dashboard/collective-dashboard.component';
import { CollectiveListComponent } from './collective-list/collective-list.component';
import { CollectiveMainComponent } from './collective-main/collective-main.component';

const COLLECTIVE_ROUTES: Routes = [
  {
    path: 'collective',
    component: CollectiveMainComponent,
    children: [
      { path: '', component: CollectiveDashboardComponent },
      { path: 'list', component: CollectiveListComponent },
      { path: 'form', component: CollectiveFormComponent },
      { path: 'detail', component: CollectiveDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(COLLECTIVE_ROUTES)],
  exports: [RouterModule],
})
export class CollectiveRoutingModule {}
