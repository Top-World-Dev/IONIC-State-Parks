import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html',
})
export class MyDataPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer,
  ) {
  }

  request() {
    let email = {
      to: "Contactus@fashiontoolr.com",
      subject: "Request My Data",
      body: "Requesting my data ...",
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}
