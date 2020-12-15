import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParkDetailsPage } from './parkdetails';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ParkDetailsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(ParkDetailsPage),
  ],
})
export class ParkDetailsPageModule {}
