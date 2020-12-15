import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LodgesListPage } from './lodgeslist';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    LodgesListPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(LodgesListPage),
  ],
})
export class LodgesListPageModule {}
