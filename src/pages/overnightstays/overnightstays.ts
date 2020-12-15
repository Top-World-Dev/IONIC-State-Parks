import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';


@IonicPage()
@Component({
  selector: "page-overnightstays",
  templateUrl: "overnightstays.html"
})
export class OvverNightStaysPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  lodgesData=[];
  camgroundsData=[];
  cabinsData=[];
  
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
    this.getlodgesData();
  }
  ionViewDidLoad() {
  
  }

  getlodgesData(){
    this.shopbook.getCabinsInfo(res => {

        this.cabinsData=res;

    });

    
    this.shopbook.getLodgesInfo(res => {
      
      
      //this.lodgesData=res;
      for (var r=0; r<res.length; r++)
      {
        if (res[r].lodges_carousel_images!=null && res[r].lodges_carousel_images!="null" ){
            this.lodgesData.push(res[r]);
        }        
      }

      this.lodgesData.forEach((value) => {
        this.shopbook.getParkInfoByUrlTitle(value.url_title, res2 => {
          if (typeof res2 === 'undefined'){
          }
          else{
            value.parkinfo=res2;           
          }
        });
      });
    }, error => {} );

      this.shopbook.getCampGroundsInfo(res => {
      
      
        //this.lodgesData=res;
        for (var r=0; r<res.length; r++)
        {
          if (res[r].campground_images!=null && res[r].campground_images!="null" ){
              this.camgroundsData.push(res[r]);
          }        
        }
  
        this.camgroundsData.forEach((value) => {
          this.shopbook.getParkInfoByRelateFacilityUrlTitle(value.url_title, res2 => {
            if (typeof res2 === 'undefined'){
            }
            else{
              value.parkinfo=res2;           
            }
          });
        });
      
        setTimeout(() => {
          console.log(this.lodgesData);
          console.log(this.camgroundsData);
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

      this.navCtrl.push("ParkDetailsPage", {
        "park": park
      }, {
        animation: 'ios-transition'
      });

   }

   goToLodgeDetails(lodge) {
    // this.app
    //   .getRootNavs()[0]
    //   .push("ParkDetailsPage", { park: park }, {animation: "ios-transition"});

      this.navCtrl.push("LodgeDetailsPage", {
        "lodge": lodge
      }, {
        animation: 'ios-transition'
      });

   }

   goToCampGroundDetails(campground) {
    // this.app
    //   .getRootNavs()[0]
    //   .push("ParkDetailsPage", { park: park }, {animation: "ios-transition"});

      this.navCtrl.push("CampGroundDetailsPage", {
        "campground": campground
      }, {
        animation: 'ios-transition'
      });

   }

   viewallcabins (){
    this.navCtrl.push("CabinsListPage", {}, {
      animation: 'ios-transition'
    });
    
   }



  

}
