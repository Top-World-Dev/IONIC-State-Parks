import { Shopbook } from './../../providers/shopbook';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-splash-screen',
  templateUrl: 'splash-screen.html',
})
export class SplashScreenPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopbook: Shopbook,
    ) {
  }

  ionViewDidLoad() {
    let nextPage = this.shopbook.isLoggedIn() ? "TabsPage" : "WalkthroughPage";
    setTimeout(() => {
      this.navCtrl.setRoot(nextPage, {}, {
        animate: true,
        direction: "forward",
        animation: 'ios-transition',
        // duration: 10000
      });
    }, 5*1000);
  }

}
