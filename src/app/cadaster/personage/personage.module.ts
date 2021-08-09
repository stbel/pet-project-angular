import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../common/material/material.module';

import { PersonageService } from './personage.service';

import { PersonageMainComponent } from './personage-main/personage-main.component';
import { PersonageDetailComponent } from './personage-detail/personage-detail.component';
import { PersonageFormComponent } from './personage-form/personage-form.component';
import { PersonageListComponent } from './personage-list/personage-list.component';

@NgModule({
  declarations: [
    PersonageMainComponent,
    PersonageDetailComponent,
    PersonageFormComponent,
    PersonageListComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [PersonageMainComponent],
  providers: [PersonageService],
})
export class PersonageModule {}
