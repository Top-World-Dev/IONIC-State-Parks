import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParksListPage } from './parkslist';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ParksListPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(ParksListPage),
  ],
})
export class ParksListPageModule {}
