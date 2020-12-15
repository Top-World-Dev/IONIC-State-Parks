import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: "page-cabindetails",
  templateUrl: "cabindetails.html"
})
export class CabinDetailsPage {
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
  cabinpark={};
  phonenumber="";
  hasphone=false;
  hearticonurl="assets/img/emptyheart.png";
  events=[];
  
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private modalController: ModalController,
    private shopbook: Shopbook,
    private appService: AppService,
    private oneSignal: OneSignal,
    private launchNavigator: LaunchNavigator,
    private iab: InAppBrowser,
    
  ) {}

  ionViewWillEnter() {
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    this.park = this.navParams.get("cabin");
    this.shopbook.getParkInfoByRelateFacilityUrlTitle(this.park["url_title"], res=>{
        this.cabinpark=res;
        //console.log(this.park);
        //console.log(this.cabinpark);
        this.LoadingView=true;
    });
    
    
  }

  slideChanged() {
  }


  
  back() {
    this.navCtrl.pop({
      animation: 'ios-transition'
    });
  }
  
  launchMapNavigator() {
    var options: LaunchNavigatorOptions;
    this.launchNavigator.navigate([this.park["gps_coordinates"][0]["lat"], this.park["gps_coordinates"][0]["lng"]], options)
  .then(
    success => console.log('Launched navigator'),
    error => console.log('Error launching navigator', error)
  );
  }

  setfavourite(){
    this.shopbook.setFavouritePark(this.park, data => {
      //this.hearticonurl="assets/img/filledheart.png";
      this.isfavorite();
      console.log(data);
     }, err => {
      console.log(err);
     });
  }

  isfavorite() {
    this.shopbook.isFavouritePark(this.park["park_id"], data=>{
      this.hearticonurl="assets/img/filledheart.png";
    }, err=>{
      this.hearticonurl="assets/img/emptyheart.png";
    })
  }

  getThisparkEvents() {
    this.shopbook.getEventsOfAPark(this.park["title"], data=>{
      this.events=data;
      console.log('this parks events');
      for (var i = 0; i < this.events.length; i++) {
        this.events[i].StartDateRead=(new Date(this.events[i].StartDate)).toString();
        this.events[i].EndDateRead=(new Date(this.events[i].EndDate)).toString();
      }
      console.log(this.events);
      
    })    
  }

  viewallevents() {
    this.navCtrl.push("EventsListPage", {
      "park": this.park
    }, {
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

   showalertspage(){
    this.navCtrl.push("ParkAlertsPage", {
      "park": this.park
    }, {
      animation: 'ios-transition'
    });
   }

   openBrowser(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes',
      hardwareback: 'yes'
    }
    const browser = this.iab.create(url, '_blank', options);
    browser.show();
  }

}
