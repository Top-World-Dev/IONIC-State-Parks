import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CampGroundDetailsPage } from './campgrounddetails';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CampGroundDetailsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(CampGroundDetailsPage),
  ],
})
export class CampGroundDetailsPageModule {}
