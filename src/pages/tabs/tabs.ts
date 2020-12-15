import { Shopbook } from "./../../providers/shopbook";
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  MenuController,
  App,
  ModalController
} from "ionic-angular";
import { SuperTabsController } from "ionic2-super-tabs";
import { BasePage } from "../../base/base-page";

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage extends BasePage {

  inboxRoot = "InboxPage";

  inboxPage = null;
  savedPage = null;

  accountRoot = "AccountPage";
  locationRoot = "LocationPage";
  alertsRoot = "AlertsPage";
  homeRoot = "HomePage";
  searchRoot = "SearchPreferencesPage";
  savedPostsRoot = "SavedPostsPage";
  notificationsRoot = "NotificationsPage";


  @ViewChild('innerNav') innerNav: NavController;

  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    private app: App,
    private superTabsCtrl: SuperTabsController,
    private shopbook: Shopbook,
    private modalCtrl: ModalController
  ) {
    super(shopbook);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
    this.superTabsCtrl.enableTabsSwipe(false);
  }

  ionViewDidLoad() {
    // this.shopbook.isEmailConfirmed(res => {
    //   if (!res || res == "false") {
    //     this.app.getActiveNavs()[0].setRoot("ConfirmEmailPage");
    //   }
    // });

    // this.shopbook.getPolicyState(state => {
    //   if(state.NeedAttention){
    //     let policyModal = this.modalCtrl.create("PrivacyPolicyModalPage", {
    //       policy: state.Policy
    //     }, {
    //       cssClass: "policy-modal"
    //     });
    //     policyModal.present();
    //   }
    // });
  }

  goToInbox() {
    if (this.innerNav.getActive().name == "InboxPage") {
      // already on it
      return;
    }

    if(!this.savedPage) this.savedPage = this.innerNav.getActive();
    this.innerNav.push(this.inboxPage || "InboxPage", {}, {
      animate: false
    });

    // this.innerNav.setPages([{page: "SavedPostsPage"}, {page: "InboxPage"},], {
    //   animate: false,
    // })

    // this.innerNav.insert(0, "SavedPostsPage");
    // this.innerNav.popTo("InboxPage", {
    //   animate: false,
    //   // animation: "ios-transition",
    //   // direction: "back"
    // });
  }

  goToSavedPosts() {
    if (this.innerNav.getActive().name == "SavedPostsPage") {
      return;
    }

    if (!this.inboxPage) this.inboxPage = this.innerNav.getActive();
    this.innerNav.push(this.savedPage || "SavedPostsPage", {}, {
      animate: false,
    });


    // if(this.innerNav.parent == "SavedPostsPage") {

    // }
    // //check if the page is already on the stack
    // this.innerNav.setPages([this.innerNav.getActive(), {page: "SavedPostsPage"}], {
    //   animate: false,
    // })
    // this.innerNav.insert(0, "InboxPage");
    // this.innerNav.popTo("SavedPostsPage", {
    //   animate: false,
    //   // animation: "ios-transition",
    //   // direction: "back"
    // });

    // // this.innerNav.push("SavedPostsPage", {}, {
    // //   animate: false,
    // //   // animation: "ios-transition",
    // //   // direction: "forward"
    // // });
  }

  // goToBookMarks() {
  //   this.app.getRootNavs()[0].push("SavedPostsPage");
  // }

  showwalkthru () {
    this.navCtrl.setRoot("WalkthroughPage", {}, {
      animate: true,
      direction: "forward",
      animation: 'ios-transition',
      // duration: 10000
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
