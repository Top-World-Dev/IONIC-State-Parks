import { Platform } from 'ionic-angular';
import { Market } from '@ionic-native/market';
import { AppVersion } from '@ionic-native/app-version';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-update-version-modal',
  templateUrl: 'update-version-modal.html',
})
export class UpdateVersionModalPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private appVersion: AppVersion,
    private market: Market,
    platform: Platform
  ) {
    platform.registerBackButtonAction(() => {
    },1);
  }

  update() {
    this.appVersion.getAppName().then(name => {
      this.market.open(name);
    });
  }


}
