import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchExistPage } from './search-exist';

@NgModule({
  declarations: [
    SearchExistPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchExistPage),
  ],
})
export class SearchExistPageModule {}
