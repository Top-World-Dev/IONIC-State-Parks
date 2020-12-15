import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: "page-parksonmap",
  templateUrl: "parksonmap.html"
})
export class ParksOnMapPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  map: GoogleMap;
  address:string;

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

  ionViewDidLoad() {
    this.getparksData();
    this.loadMap();
    // fetch('./assets/json/alphavis.json').then(res => res.json())
    // .then(json => {
    //   console.log(json);
    // });
  }

  back() {
    this.navCtrl.pop({
      animation: 'ios-transition'
    });
  }
  
  getparksData(){
    this.shopbook.getParksData(res => {
      console.log(res);
    }, error => {} );
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 43.0741704,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    });
    //this.goToMyLocation();
  }


  goToMyLocation(){
    this.map.clear();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null ,2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        duration: 5000
      });

      //add a marker
      let marker: Marker = this.map.addMarkerSync({
        title: '@ionic-native/google-maps plugin!',
        snippet: 'This plugin is awesome!',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      //show the infoWindow
      marker.showInfoWindow();

      //If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        this.showToast('clicked!');
      });

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        (data) => {
            console.log("Click MAP",data);
        }
      );
    })
    .catch(err => {
      //this.loading.dismiss();
      this.showToast(err.error_message);
    });
  }

  async showToast(message: string) {
    // let toast = await this.toastCtrl.create({
    //   message: message,
    //   duration: 2000,
    //   position: 'middle'
    // });
    // toast.present();
  }

  

}
