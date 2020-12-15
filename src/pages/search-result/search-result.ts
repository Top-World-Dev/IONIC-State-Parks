import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";
import { AppService } from "../../providers/app.service";

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  search = {
    Product: {},
    SubProducts: [],
    NotificationsEnabled: true,
    ColorTags: [],
    LookTagss: [],
    SubProductTags: []
  };

  isNewSearch = false;
  productPosts = [];
  searchIndex = -1;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private shopbook: Shopbook,
    private appService: AppService) {
  }

  ionViewDidLoad() {
    this.searchIndex = this.navParams.get("index");
    this.isNewSearch = this.navParams.get("isNew");
    this.search = this.navParams.get("search");
    if (this.search) {
      console.log(this.search);
      
    }
    else {
      this.search = {
        Product: {},
        SubProducts: [],
        ColorTags: [],
        LookTagss: [],
        NotificationsEnabled: true,
        SubProductTags: []
      };
    }
  }

  enableNotifications(enable){
    this.search.NotificationsEnabled = enable;
    this.shopbook.editSavedSearch(this.search, () => {

    });
  }

  productPostDetails(productPost) {
    this.navCtrl.push("ProductPostsPage", { "productPost": productPost });
  }


  editSearch() {
    this.navCtrl.push("CreateSearchProductPage", {
      "search": this.search,
      "index": this.searchIndex
    });
  }

  deleteSearch() {
    this.appService.showAlert("Delete Search", "Are You sure you wanna delete this saved search ?", "Yes", () => {
      this.shopbook.deleteSavedSearch(this.search, () => {
        this.navCtrl.setRoot("TabsPage");
      });
    });
  }

  saveSearch(){
    this.shopbook.createSearch(this.search, () => {
         this.navCtrl.setRoot("TabsPage");
      });
  }

}
