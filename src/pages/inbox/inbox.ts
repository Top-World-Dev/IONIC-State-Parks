import { NotificationAlertPage } from './../notification-alert/notification-alert';
import { AppService } from './../../providers/app.service';
import { Component } from "@angular/core";
import { Platform, IonicPage, NavController, NavParams, App, ModalController } from "ionic-angular";
import { Shopbook } from "../../providers/shopbook";
import moment from "moment";
import { OneSignal } from '@ionic-native/onesignal';


@IonicPage()
@Component({
  selector: "page-inbox",
  templateUrl: "inbox.html"
})
export class InboxPage {
  newsletters = [];
  quizPending = false;
  loadLimit = 10;
  hasMore = true;
  page = 0;
  suggestion_container: HTMLElement;
  profile_message: HTMLElement;
  ion_header: HTMLElement;
  LoadingView=false;
  

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
    let lastPage = this.navCtrl.last().name;
    // if(document.getElementsByTagName("ion-header")){
    //   let _ion_header: HTMLCollection= document.getElementsByTagName("ion-header") as HTMLCollection;
    //   this.ion_header = _ion_header[1] as HTMLElement;
    // }

    // if(document.getElementById("profile_message")){
    //   this.profile_message = document.getElementById("profile_message");
    //   this.profile_message.style.display = "none";
    // }

    // if(document.getElementById("suggestion_container")){
    //   this.suggestion_container = document.getElementById("suggestion_container");
    //   this.suggestion_container.style.display = "";
    // }

    // if(lastPage != 'InboxPage'){
    //   if(this.profile_message){
    //     this.profile_message.style.display = "block";
    //     this.suggestion_container.style.display = "none";
    //     this.ion_header.style.display = "none";
    //   }

    // }
    // this.getNewsLetters(null);

    // this.shopbook.addOnHiddenIdsChangeListener((ids: number[]) => {
    //   this.setHiddenNewsLetters(ids);
    // });
  }

  Okay(){
    // this.measurments.logQuizDone();
    // this.profile_message.style.display = "none";
    // document.getElementById("profile_message").style.display="none";
    // this.suggestion_container.style.display = "block";
    // this.ion_header.style.display = "block";
    
    // this.navCtrl.push("SplashScreenPage");
  }

  setHiddenNewsLetters(hiddenIds: number[]) {
    // let idsSet = new Set(hiddenIds);
    // for (let i = 0; i < this.newsletters.length; i++) {
    //   this.newsletters[i].hide = idsSet.has(this.newsletters[i].Id);
    // }
  }

  getNewsLetters(refresher) {
    // this.LoadingView=true;
    // this.shopbook.getNewsletters(
    //   0,
    //   this.loadLimit,
    //   (quizPending, newsletters) => {
    //     this.quizPending = quizPending;
    //     this.newsletters = newsletters;

    //     if (!this.quizPending) 
    //     {
    //       if (localStorage.getItem('notifications')==null)
    //       {
    //         this.platform.ready().then(() => {
    //         if (this.platform.is("cordova")) 
    //           {
    //             this.showPushNotificationPermission();
    //           }
    //         });
    //       }
    //     }

    //     this.shopbook.getMyHiddenNewslettersIds(hiddenIds => {
    //       this.setHiddenNewsLetters(hiddenIds);
    //     });
    //     this.processNewsletters(newsletters);

    //     if (refresher) refresher.complete();
    //     this.LoadingView=false;
    //   }, () => {
    //     this.appService.showAlert("Error occurred", "Sorry An error has occurred, we are working on it", "Ok" , () => {});
    //     this.LoadingView=false;
    //   }, false
    // );


  }

   showPushNotificationPermission() {
    // console.log("checking permission");
    // // this.oneSignal.getPermissionSubscriptionState().then(res => {
    // //   if (res.permissionStatus.status != 2) {
    //     let notificationsModal = this.modalController.create("NotificationAlertPage");
    //     notificationsModal.present();
    //     notificationsModal.onDidDismiss(data => {
    //       //alert(JSON.stringify(data));
          
    //     //  this.oneSignal.promptForPushNotificationsWithUserResponse().then(res => {
    //     //     console.log(res);
    //     //   }).catch(err => {
    //     //     console.log(err);
    //     //   })


    //     })
        
    //   //}
    // //});
   }

  private initOneSignal() {
    //this.shopbook.initOnesignal(true);
  }

  processNewsletters(newsletters) {
    // const imagesNum = 8;

    // for (let i = 0; i < newsletters.length; i++) {
    //   this.setNewsletterPreview(newsletters[i], imagesNum);
    //   // remove the already shown pictures
    //   newsletters[i].posts = imagesNum * -1;
    //   for (let j = 0; j < newsletters[i].LetterLooks.length; j++) {
    //     if (newsletters[i].LetterLooks[j].ProductPosts != null)
    //       newsletters[i].posts +=
    //         newsletters[i].LetterLooks[j].ProductPosts.length;
    //   }

    //   if(newsletters[i].posts < 0) newsletters[i].posts = 0;

    //   var newsletterDate = moment(newsletters[i].CreatedAt).subtract(
    //     new Date().getTimezoneOffset(),
    //     "m"
    //   );
    //   var yesterday = new Date();
    //   yesterday.setDate(yesterday.getDate() - 2);
    //   newsletters[i].isNew = new Date(newsletters[i].CreatedAt) > yesterday;
    //   //format created at date using moment
    //   newsletters[i].Date = newsletters[i].isNew
    //     ? newsletterDate.fromNow()
    //     : newsletterDate.format("Do MMM YY");
    // }
  }

  setNewsletterPreview(newsletter, imagesNum) {
    // var remainingImages = imagesNum;
    // newsletter.previewImages = [];
    // newsletter.productIds = [];
    // let selectedPosts = [];
    // for (let j = 0; j < newsletter.LetterLooks.length; j++) {
    //   for (let k = 0; k < newsletter.LetterLooks[j].ProductPosts.length; k++) {
    //     if (selectedPosts.indexOf(newsletter.LetterLooks[j].ProductPosts[k].Id) == -1) {
    //       selectedPosts.push(newsletter.LetterLooks[j].ProductPosts[k].Id);
    //       newsletter.previewImages.push(
    //         newsletter.LetterLooks[j].ProductPosts[k].ProductPostImages[0]
    //           .ImageUrl
    //       );

    //       newsletter.productIds.push(
    //         newsletter.LetterLooks[j].ProductPosts[k].Id);

    //       remainingImages--;
    //       if (remainingImages == 0) return;
    //     }
    //   }
    // }
  }

  goToNewsLetterDetails(newsletter) {
    // this.measurments.logNewsLetterOpened(newsletter.Id);
    // this.app
    //   .getRootNavs()[0]
    //   .push("SuggestionsPage", { newsletter: newsletter }, {animation: "ios-transition"});
    // this.shopbook.setSeenNewsletter(newsletter);
    // newsletter.seen = true;
    // //this.navCtrl.push("SuggestionsPage", {"newsletter": newsletter});
  }

  quiz() {
    // this.measurments.logTakeQuiz();
    // this.app.getRootNav().push("QuizGenderPage", {}, {
    //   animation: "ios-transition"
    // });
  }

  doRefresh(refresher) {
    //refresher.complete();
    //this.getNewsLetters(refresher);
  }

  doInfinite(infiniteScroll) {
    // if (this.hasMore) {
    //   //let page = Math.floor(this.newsletters.length  / this.loadLimit);
    //   this.shopbook.getNewsletters(++this.page, this.loadLimit,
    //     (quizPending, newsletters) => {
    //       this.quizPending = quizPending;

    //       for(let i = 0; i < newsletters.length; i ++){
    //         this.addNewsLetterIfNotExist(newsletters[i]);
    //       }

    //       // the awesome passing by reference mistry
    //       console.log(newsletters);
    //       this.processNewsletters(newsletters);

    //       if (infiniteScroll) infiniteScroll.complete();
    //       //this.hasMore = newsletters.length >= this.loadLimit;
    //     }
    //   );
    // } else {
    //   infiniteScroll.complete();
    // }
  }

  addNewsLetterIfNotExist(letter){
    // for(let i = 0; i < this.newsletters.length; i ++){
    //   if(this.newsletters[i].Id == letter.Id) return;
    // }
    // this.newsletters.push(letter);
  }

  showparksonmap () {
    // this.app
    //   .getRootNavs()[0]
    //   .push("ParksOnMapPage", { }, {animation: "ios-transition"});
      this.navCtrl.push("ParksOnMapPage");
  }

  showparkslist () {
    this.navCtrl.push("ParksListPage");
    
  }

  showeventslist () {
    this.navCtrl.push("EventsListPage");
    
  }
    
  
  showovernightstays () {
    this.navCtrl.push("OvverNightStaysPage");
    
  }

}
