import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrivacyPolicyModalPage } from './privacy-policy-modal';

@NgModule({
  declarations: [
    PrivacyPolicyModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrivacyPolicyModalPage),
  ],
})
export class PrivacyPolicyModalPageModule {}
