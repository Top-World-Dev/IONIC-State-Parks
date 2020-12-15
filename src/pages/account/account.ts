import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Events } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";
import { App } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  account = {
    UserInfo: {
      FirstName:"",
      LastName:"",
    },
    Name: "",
    Email:"",
    Code:"",
    UserStorePreferences: [],
    ProfileImageUrl: "assets/img/profile.png"
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopbook: Shopbook,
    private app: App,
    public actionSheetCtrl: ActionSheetController,
    private events: Events,
    private emailComposer: EmailComposer,
  ) {
  }

  ionViewDidLoad() {
    this.events.subscribe("StorePreferencesPoped", () => {
      
    });
  }

  ionViewDidEnter() {
    
  }


  editProfile() {
    this.app.getRootNav().push("EditProfilePage", {
      "account": this.account
    });
  }

  changePassword(){
    this.app.getRootNav().push("ChangePasswordPage");
  }

  addStores() {
    this.app.getRootNav().push("StorePreferencesPage", {
      stores: this.account.UserStorePreferences
    });
  }

  logout() {
    this.shopbook.logout(() => {
      this.app.getRootNav().setRoot("LoginPage", {}, { animate: true, direction: 'forward' });
    });
  }


  unfolow() {

  }

  request() {
    let email = {
      to: "Contactus@fashiontoolr.com",
      subject: "Request My Account Deletion",
      body: "Requesting to delete my account ... \n Note: Please mention your fashiontoolr account email address and reason for account deletion request. One of our Team members will be in touch shortly to confirm your account deletion.",
      isHtml: true
    };

    this.emailComposer.open(email);
  }
  editPreferences() {
    this.app.getRootNavs()[0].push("EditPreferencesPage");
  }

}
