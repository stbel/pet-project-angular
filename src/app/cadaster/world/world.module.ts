import { WorldRoutingModule } from './world-routing.module';
import { MaterialModule } from './../../common/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldMainComponent } from './world-main/world-main.component';
import { WorldFormComponent } from './world-form/world-form.component';
import { WorldListComponent } from './world-list/world-list.component';
import { WorldDetailComponent } from './world-detail/world-detail.component';
import { WorldDashboardComponent } from './world-dashboard/world-dashboard.component';

@NgModule({
  declarations: [
    WorldMainComponent,
    WorldFormComponent,
    WorldListComponent,
    WorldDetailComponent,
    WorldDashboardComponent,
  ],
  imports: [CommonModule, MaterialModule, WorldRoutingModule],
})
export class WorldModule {}
