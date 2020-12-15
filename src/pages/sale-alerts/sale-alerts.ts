import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";

@IonicPage()
@Component({
  selector: 'page-sale-alerts',
  templateUrl: 'sale-alerts.html',
})
export class SaleAlertsPage {

  sales = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopbook: Shopbook) {
  }

  ionViewDidLoad() {
    
  }

  goToDetailsPage(sale) {
    this.navCtrl.push("SaleDetailsPage", {
      "sale": sale
    });
  }

}
