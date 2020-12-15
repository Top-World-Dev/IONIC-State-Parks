import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OvverNightStaysPage } from './overnightstays';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    OvverNightStaysPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(OvverNightStaysPage),
  ],
})
export class OverNightStaysPageModule {}
