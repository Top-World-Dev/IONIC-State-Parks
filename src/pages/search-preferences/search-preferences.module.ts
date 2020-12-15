import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPreferencesPage } from './search-preferences';

@NgModule({
  declarations: [
    SearchPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchPreferencesPage),
  ],
})
export class SearchPreferencesPageModule {}
