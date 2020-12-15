import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParksOnMapPage } from './parksonmap';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ParksOnMapPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(ParksOnMapPage),
  ],
})
export class ParksOnMapPageModule {}
