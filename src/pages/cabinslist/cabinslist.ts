import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';


@IonicPage()
@Component({
  selector: "page-cabinslist",
  templateUrl: "cabinslist.html"
})
export class CabinsListPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  parksData=[];
  
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
    this.shopbook.getCabinsInfo(res => {
      
      this.parksData=res;
      // for (var i=0; i<this.parksData.length; i++){
      //   if (this.parksData["cabin_images"]!=null){
      //     if (this.parksData["cabin_images"].length<=0)
      //     {
      //       this.parksData["cabin_images"]=[{"url":"assets/img/cabins.png"}];
      //     }
      //     else{
      //       this.parksData["cabin_image"]=this.parksData["cabin_image"][1]["url"];
      //     }
      //   }
      // }

      // this.parksData.forEach((value) => {
      //   this.shopbook.getParkInfoByUrlTitle(value.url_title, res2 => {
      //     if (typeof res2 === 'undefined'){
      //     }
      //     else{
      //       value.parkinfo=res2;           
      //     }
      //   });
      // });
    
      setTimeout(() => {
        console.log(this.parksData);
        this.LoadingView=true;
      }, 1*1000);

      
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

      this.navCtrl.push("CabinDetailsPage", {
        "cabin": park
      }, {
        animation: 'ios-transition'
      });

   }



  

}
