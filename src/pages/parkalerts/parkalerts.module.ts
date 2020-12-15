import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkAlertsPage } from './parkalerts';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ParkAlertsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(ParkAlertsPage),
  ],
})
export class ParkAlertsPageModule {}
