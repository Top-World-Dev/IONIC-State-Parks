import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './eventdetails';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    EventDetailsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(EventDetailsPage),
  ],
})
export class EventDetailsPageModule {}
