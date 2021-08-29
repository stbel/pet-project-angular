import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorldMainComponent } from './world-main/world-main.component';
import { WorldDashboardComponent } from './world-dashboard/world-dashboard.component';
import { WorldListComponent } from './world-list/world-list.component';
import { WorldDetailComponent } from './world-detail/world-detail.component';
import { WorldFormComponent } from './world-form/world-form.component';

const WORLD_ROUTES: Routes = [
  {
    path: 'world',
    component: WorldMainComponent,
    children: [
      { path: '', component: WorldDashboardComponent },
      { path: 'list', component: WorldListComponent },
      { path: 'form', component: WorldFormComponent },
      { path: 'detail', component: WorldDetailComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(WORLD_ROUTES)],
  exports: [RouterModule],
})
export class WorldRoutingModule {}
