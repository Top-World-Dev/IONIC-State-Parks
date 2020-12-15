import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Shopbook } from '../../providers/shopbook';

@IonicPage()
@Component({
  selector: 'page-privacy-policy-modal',
  templateUrl: 'privacy-policy-modal.html',
})
export class PrivacyPolicyModalPage {

  policy = null;
  agreed = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private shopbook: Shopbook) {

  }

  ionViewDidLoad() {
    this.policy = this.navParams.get("policy");
  }

  viewPolicy(){
    this.navCtrl.push("PrivacyPolicyPage", { policy: this.policy });
  }

  agree(){
    
  }

}
