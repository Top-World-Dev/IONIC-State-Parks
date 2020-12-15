import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LodgeDetailsPage } from './lodgedetails';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    LodgeDetailsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(LodgeDetailsPage),
  ],
})
export class LodgeDetailsPageModule {}
