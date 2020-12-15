import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabinDetailsPage } from './cabindetails';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CabinDetailsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(CabinDetailsPage),
  ],
})
export class CabinDetailsPageModule {}
