import { NgModule } from '@angular/core';

import { ArtifactModule } from './artifact/artifact.module';
import { CollectiveModule } from './collective/collective.module';
import { PersonageModule } from './personage/personage.module';
import { PlaceModule } from './place/place.module';
import { StoryModule } from './story/story.module';
import { WorldModule } from './world/world.module';

const CADASTER_MODULES = [
  ArtifactModule,
  CollectiveModule,
  PersonageModule,
  PlaceModule,
  StoryModule,
  WorldModule,
];

@NgModule({
  imports: [CADASTER_MODULES],
  exports: [CADASTER_MODULES],
})
export class CadasterModule {}
