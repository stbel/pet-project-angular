import { NgModule } from '@angular/core';

import { PlaceModule } from './place/place.module';
import { PersonageModule } from './personage/personage.module';
import { CollectiveModule } from './collective/collective.module';
import { ArtifactModule } from './artifact/artifact.module';

@NgModule({
  imports: [
    ArtifactModule,
    CollectiveModule,
    PersonageModule,
    PlaceModule,
  ],
  exports: [
    ArtifactModule,
    CollectiveModule,
    PersonageModule,
    PlaceModule,
  ]
})
export class CadasterModule { }
