import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';


@IonicPage()
@Component({
  selector: "page-parkalerts",
  templateUrl: "parkalerts.html"
})
export class ParkAlertsPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  park={};
  
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private modalController: ModalController,
    private shopbook: Shopbook,
    private appService: AppService,
    private oneSignal: OneSignal,
  ) {}

  ionViewWillEnter() {
    
  }
  ionViewDidLoad() {
    this.park = this.navParams.get("park");
    console.log("This Event park");
    console.log(this.park);
    this.LoadingView=true;
  }

  
  back() {
    this.navCtrl.pop({
      animation: 'ios-transition'
    });
  }

  

  

}
