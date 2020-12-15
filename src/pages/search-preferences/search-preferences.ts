import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";


@IonicPage()
@Component({
  selector: 'page-search-preferences',
  templateUrl: 'search-preferences.html',
})
export class SearchPreferencesPage {

  searches = [];
  searchText = "";
  // a list for auto completed subproducts
  autoSubProducts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, private shopbook: Shopbook) {
  }

 ionViewDidEnter() {
    console.log("loading saved searches");
    this.loadSearches();

  }

  loadSearches() {
    this.shopbook.getSavedSearches((searches) => {
      this.searches = searches;
    });
    console.log(this.searches);

  }

  createSearch() {
    this.app.getRootNavs()[0].push("CreateSearchProductPage", {});
  }


  searchProductposts(search) {
    this.app.getRootNavs()[0].push("SearchResultPage", {
      "search": search,
      "index": this.searches.indexOf(search)
    });
  }

  confirmSearchPage(subproduct){
    var subproductExit = false;
    if(this.searches){
      for (var i = 0; i < this.searches.length; i++) {
        var search = this.searches[i];
        if (search.SubProductTags && search.SubProductTags.legth > 1){
          if (search.SubProductTags[0].SubProductId == subproduct.Id) {
            subproductExit = true;
            break;
          }
        }
      }
    }
    if(subproductExit){
      this.app.getRootNavs()[0].push("SearchExistPage", {
        "subproduct": subproduct
      });
    }
    else {
      this.app.getRootNavs()[0].push("ConfirmSearchPage", {
        "subproduct": subproduct,
        "searches": this.searches
      });
    }

  }

  clearSearch(){
    this.searchText = '';
    this.autoSubProducts = [];
  }


  autoComplete(){
    
  }


}
