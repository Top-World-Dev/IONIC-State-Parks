import { Shopbook } from './../../providers/shopbook';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the NotificationAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-alert',
  templateUrl: 'notification-alert.html',
})
export class NotificationAlertPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private shopbook: Shopbook
    ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NotificationAlertPage');
  }

  showNotificationsAlert() {
    // console.log("prompt the user for PN");
    localStorage.setItem('notifications','yes');
    this.shopbook.initOnesignal(true);
    this.viewCtrl.dismiss();
  }

  notNow() {
    localStorage.setItem('notifications','no');
    this.viewCtrl.dismiss();
  }

}
