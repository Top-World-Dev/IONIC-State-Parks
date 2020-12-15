import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateVersionModalPage } from './update-version-modal';

@NgModule({
  declarations: [
    UpdateVersionModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateVersionModalPage),
  ],
})
export class UpdateVersionModalPageModule {}
