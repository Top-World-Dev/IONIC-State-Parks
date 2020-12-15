import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';


@IonicPage()
@Component({
  selector: "page-eventslist",
  templateUrl: "eventslist.html"
})
export class EventsListPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  eventsData=[];
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
    this.getparksData();
  }
  ionViewDidLoad() {
    this.park = this.navParams.get("park");
    
  }

  getparksData(){
    this.shopbook.getAllEventsData(res => {
      
      //this.eventsData=res;
      //console.log(this.eventsData);
      for (var i = 0; i < res.length; i++) {
        res[i].StartDateRead=(new Date(res[i].StartDate)).toString();
        res[i].EndDateRead=(new Date(res[i].EndDate)).toString();
        if (this.park!=null){
          if (res[i].Account==this.park["title"]) {
            this.eventsData.push(res[i]);
          }
        }
        else{
          this.eventsData.push(res[i]);
        }
      }
      this.LoadingView=true;
    }, error => {} );
  }

  back() {
    this.navCtrl.pop({
      animation: 'ios-transition'
    });
  }

  goToEventDetails(event) {
    // this.app
    //   .getRootNavs()[0]
    //   .push("ParkDetailsPage", { park: park }, {animation: "ios-transition"});
      this.shopbook.getParkInfoByTitle(event.Account, data=>{
        var thiseventpark=data;
        this.navCtrl.push("EventDetailsPage", {
          "event": event,
          "park": thiseventpark
        }, {
          animation: 'ios-transition'
        });
      })
      

   }



  

}
