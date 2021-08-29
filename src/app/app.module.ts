import { HomeModule } from './common/home/home.module';
import { MaterialModule } from './common/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CadasterModule } from './cadaster/cadaster.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CadasterModule,
    HomeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
