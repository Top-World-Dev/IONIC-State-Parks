import { Shopbook } from './../../providers/shopbook';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-privacy-policy",
  templateUrl: "privacy-policy.html"
})
export class PrivacyPolicyPage {
  policy = null;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shopbook: Shopbook) {}

  ionViewDidLoad() {
    this.policy = this.navParams.get("policy");
  }

  agree() {
    
  }
}
