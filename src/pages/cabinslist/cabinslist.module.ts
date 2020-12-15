import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CabinsListPage } from './cabinslist';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    CabinsListPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(CabinsListPage),
  ],
})
export class CabinsListPageModule {}
