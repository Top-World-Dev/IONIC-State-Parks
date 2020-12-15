import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {


  notifications = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopbook: Shopbook, private app: App) {
  }

  ionViewDidLoad() {
    this.getNotificaions();
  }


  getNotificaions(next?) {
    this.shopbook.getMyNotifications((notifications) => {
      this.notifications = notifications;
      for (var i = 0; i < this.notifications.length; i++) {
        this.notifications[i].DateTime = moment(this.notifications[i].DateTime).fromNow();
      }
      if(next){
        next();
      }
    });
  }

  doRefresh(refresher) {
    this.getNotificaions(() => {
      refresher.complete();
    })
  }

  goToProductDetails(notification){
    this.app.getRootNavs()[0].push("ProductPostsPage", { "productPost": notification.ProductPost });
  }

  deleteNotification(notification){
    this.shopbook.deleteNotification(notification, () => {
      this.notifications.splice(this.notifications.indexOf(notification), 1);
    });
  }

}
