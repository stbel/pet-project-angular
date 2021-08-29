import { NgModule } from '@angular/core';

import { ArtifactModule } from './artifact/artifact.module';
import { CollectiveModule } from './collective/collective.module';
import { PersonageModule } from './personage/personage.module';
import { PlaceModule } from './place/place.module';
import { StoryModule } from './story/story.module';
import { WorldModule } from './world/world.module';

@NgModule({
  imports: [
    ArtifactModule,
    CollectiveModule,
    PersonageModule,
    PlaceModule,
    StoryModule,
    WorldModule,
  ],
  exports: [
    ArtifactModule,
    CollectiveModule,
    PersonageModule,
    PlaceModule,
    StoryModule,
    WorldModule,
  ]
})
export class CadasterModule { }
