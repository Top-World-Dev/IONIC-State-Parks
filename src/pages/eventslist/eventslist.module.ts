import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsListPage } from './eventslist';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    EventsListPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(EventsListPage),
  ],
})
export class EventsListPageModule {}
