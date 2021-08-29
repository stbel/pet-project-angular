import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMainComponent } from './common/home/home-main/home-main.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
