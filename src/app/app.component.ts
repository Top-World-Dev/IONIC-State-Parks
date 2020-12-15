import { AppService } from "./../providers/app.service";
import { Component } from "@angular/core";
import { Platform, App, MenuController, ModalController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { OneSignal } from "@ionic-native/onesignal";
import { Shopbook } from "../providers/shopbook";
import { EmailComposer } from "@ionic-native/email-composer";
import { AppVersion } from "@ionic-native/app-version";
import { Market } from "@ionic-native/market";
import { Deeplinks } from '@ionic-native/deeplinks';
import { InboxPage } from "../pages/inbox/inbox";
import { Environment } from '@ionic-native/google-maps';
// import { Firebase } from "@ionic-native/firebase"
// import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
// import { Crashlytics } from "@ionic-native/fabric";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // rootPage: any = "TabsPage";
  rootPage: any = "SplashScreenPage";
  // rootPage: any = this.shopbook.isLoggedIn() ? "TabsPage" : "LoginPage";
  quizPending = true;
  notimenu=true;

  constructor(
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private oneSignal: OneSignal,
    private shopbook: Shopbook,
    private appService: AppService,
    private app: App,
    private market: Market,
    private appVersion: AppVersion,
    private emailComposer: EmailComposer,
    private menuController: MenuController,
    private modalCtrl: ModalController,
    private deeplinks: Deeplinks,
    private modalController: ModalController,
    // private firebase: Firebase,
  ) {
    platform.ready().then(() => {

      if (localStorage.getItem('notifications') !== null) {
          this.notimenu=false;
      }

      ////////////DEEP LINK WORKING///////////////////////////
      
      this.deeplinks.routeWithNavController(this.menuController, {
        '/registerconfirm/:registerId': InboxPage
      }).subscribe(match => {
          // match.$route - the route we matched, which is the matched entry from the arguments to route()
          // match.$args - the args passed in the link
          // match.$link - the full link data
                
          var googleData=JSON.stringify(match.$link.path);

          this.googleLoginOrRegister(googleData);
                // var googleDataParts=googleData.split('|');
                // var ggi;
                // for (ggi = 0; ggi < googleDataParts.length; ggi++) {
                //   console.log(googleDataParts[ggi]);
                // }

          console.log('Successfully matched route', match.$link.path);

        }, nomatch => {
          // nomatch.$link - the full link data
          console.error('Got a deeplink that didn\'t match', nomatch.$link);
        });


      ///////////END OF DEEP LINK WORKING/////////////////////

      //this.googleLoginOrRegister("uid:xZ6mRtT0PGNYpF6WdT0Ti2T8cHR2|displayName:Muhammad Zakria|email:bloomsoft@gmail.com|emailVerified:true");

      setTimeout(() => this.shopbook.appLaunches(), 500);
      this.shopbook.handleAppOpened();
      // okay, now set the action that the app will perform
      // in case the app was opened from notification
      this.shopbook.onNotificationOpened(() => {
        //for now we will navigate to notifications page
        //be careful if the app was opened when the user is unauthorized and
        // if (this.app.getActiveNavs()[0].parent.slideTo){
        //   this.app.getActiveNavs()[0].parent.slideTo(1);
        // }
        // console.log();
        // if (this.app.getActiveNavs()[0].parent.parent.select){
        //   this.app.getActiveNavs()[0].parent.parent.select(1);
        // }
      });
      if (this.platform.is("cordova")) {
	      this.appVersion.getVersionNumber().then(num => {
	        let platformStr = this.platform.is("ios") ? "ios" : "android";
	        // alert(platformStr);
	        this.shopbook.needsToUpdate(platformStr, num, result => {
	          // alert(num + " " + JSON.stringify(result));
	          if (result.Update) {
	            let updateModal = this.modalCtrl.create("UpdateVersionModalPage");
	            updateModal.present();

	            // this.appService.showAlert(
	            //   "Update Available",
	            //   "You are required to update the app Version in order to be able to access the latest features of the app with no errors",
	            //   "Update",
	            //   () => {
	            //     this.appVersion.getAppName().then(name => {
	            //       this.market.open(name);
	            //     });
	            //   },
	            //   false
	            // );
	          }
          });

          this.platform.pause.subscribe(() => {
            this.onPause();
          });
	      });
      }
      // if the user logged in but the email is not
      // confirmed send him to email confirmation page
      

      if (this.shopbook.isLoggedIn()) {
      }

      //ONESignal Push Notifications Enabling Code:
      /////////////////////////////////////////////////////////////////////
      // if (localStorage.getItem('notifications')!=null)
      // {
      //   if (localStorage.getItem('notifications')=='yes') 
      //   {

          try {
            this.oneSignal.startInit(
              "73e13c50-ce06-4982-b676-d92423b19d2b",
              "687364916245"
            );
    
            try {
    
              this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
              //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
              //alert(this.notimenu);
              if (localStorage.getItem('notifications')!==null)
              {
                
                if (localStorage.getItem('notifications')=='yes')
                {

                    this.oneSignal.handleNotificationReceived().subscribe(() => {
                      // alert("Notifications received");
                    });
                
      
                    this.oneSignal.handleNotificationOpened().subscribe(() => {
                      // alert("handleNotificationOpened")
                      this.shopbook.notificationOpened();
                    });

                }
              }

              this.oneSignal.endInit();
    
              this.oneSignal.getIds().then(ids => {
                if (localStorage.getItem('notifications') !== null) {
                  if (localStorage.getItem('notifications') == 'yes') {
                      this.shopbook.setoneSignalPlayerId(ids.userId);
                  }
                }
              });

            } catch (e) {}
          } catch (e) {
            console.log(e);
          }
          
      //   }
      // }
      

      
      //////////////////////////////////////////////////////////

      Environment.setEnv({
        // api key for server
        'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDVhqQlwuA0qIkL_wqFqcXzOLW3l-0TH88',

        // api key for local development
        'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDVhqQlwuA0qIkL_wqFqcXzOLW3l-0TH88'
      });

      splashScreen.hide();

      // branchInit()
    });

    platform.resume.subscribe(() => {
      // branchInit();
    });

    // Branch initialization
    // const branchInit = () => {
    //   // only on devices
    //   if (!platform.is("cordova")) {
    //     return;
    //   }
    //   const Branch = window["Branch"];
    //   Branch.initSession().then(data => {
    //     if (data["+clicked_branch_link"]) {
    //       // read deep link data on click
    //       alert("Deep Link Data: " + JSON.stringify(data));
    //     }
    //   });
    // };

  }

  // quiz(){
  //   this.app.getRootNav().push("QuizGenderPage");
  // }
  editPreferences() {
    this.app.getRootNavs()[0].push("EditPreferencesPage");
    this.menuController.close();
  }

  searchPage() {
    this.app.getRootNavs()[0].push("SearchPage");
    this.menuController.close();
  }

  account() {
    this.app.getRootNavs()[0].push("AccountPage");
    this.menuController.close();
  }

  rateUs() {
    
  }

  logout() {
    this.menuController.close();
    this.shopbook.logout(() => {
      this.app
        .getRootNavs()[0]
        .setRoot("LoginPage", {}, { animate: true, direction: "forward" });
        window.location.reload();
    });
  }

  onPause() {
    
  }

  myData() {
    this.app.getRootNavs()[0].push("MyDataPage");
    this.menuController.close();
  }

  pushalert() {
    let notificationsModal = this.modalController.create("NotificationAlertPage");
        notificationsModal.present();
        notificationsModal.onDidDismiss(data => {});
  }

  contactUs() {
    this.menuController.close();
    let email = {
      to: "contactus@fashiontoolr.com",
      subject: "Shopbook app",
      body: "",
      isHtml: true
    };

    this.emailComposer.open(email);
  }

  googleLoginOrRegister(googledata) {

      
       
    
  }

  testclick()
  {
    
  }

  toggleMenu() {
    this.menuController.toggle(); //Add this method to your button click function
  }
}
