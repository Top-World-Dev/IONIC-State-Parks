import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';


@IonicPage()
@Component({
  selector: "page-parkslist",
  templateUrl: "parkslist.html"
})
export class ParksListPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  parksData={};
  
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
    this.getparksData();
  }
  ionViewDidLoad() {
  
  }

  getparksData(){
    this.shopbook.getParksInfo(res => {
      
      this.parksData=res;
      console.log(this.parksData);
      this.LoadingView=true;
    }, error => {} );
  }

  back() {
    this.navCtrl.pop({
      animation: 'ios-transition'
    });
  }

  goToParkDetails(park) {
    // this.app
    //   .getRootNavs()[0]
    //   .push("ParkDetailsPage", { park: park }, {animation: "ios-transition"});

      this.navCtrl.push("ParkDetailsPage", {
        "park": park
      }, {
        animation: 'ios-transition'
      });

   }



  

}
