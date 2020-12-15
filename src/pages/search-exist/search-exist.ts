import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-exist',
  templateUrl: 'search-exist.html',
})
export class SearchExistPage {

  subproduct = {}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.subproduct = this.navParams.get("subproduct");
  }

  goBack(){
    this.navCtrl.pop();
  }


}
