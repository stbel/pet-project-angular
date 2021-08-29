import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HomeMainComponent],
})
export class HomeModule {}
