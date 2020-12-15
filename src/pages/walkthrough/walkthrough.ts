import { Shopbook } from './../../providers/shopbook';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides } from 'ionic-angular';
import { AppService } from '../../providers/app.service';


@IonicPage()
@Component({
  selector: "page-walkthrough",
  templateUrl: "walkthrough.html"
})
export class WalkthroughPage {

  
  model = {
    token: ""
  }

  pagetitle="Search & Find a Park";
  showbutton=false;
  @ViewChild(Slides) slides: Slides;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private shopbook: Shopbook,
    private menuCtrl: MenuController,
    private appService: AppService
  ) {}

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
    this.menuCtrl.enable(false);
  }

  register() {
    
    this.navCtrl.push("RegisterNamePage", {}, {
      animation: 'ios-transition'
    });
  }

  login() {
    
    this.navCtrl.push("");
  }

  error(){
    // this.shopbook.getError(res => {
    //   //it shouldn't come here
    // });
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    if (currentIndex==0){ this.pagetitle="Search & Find a Park";this.showbutton=false;}
    if (currentIndex==1){ this.pagetitle="Filter for Best Results";this.showbutton=false;}
    if (currentIndex==2){ this.pagetitle="Book an Overnight Stay";this.showbutton=false;}
    if (currentIndex==3){ this.pagetitle="Explore Tennessee & Fill<br />Your Passport"; this.showbutton=true;}

  }

  closeme(){
    this.navCtrl.setRoot("TabsPage", {}, {
      animate: true,
      direction: "forward",
      animation: 'ios-transition',
      // duration: 10000
    });
  }

}
