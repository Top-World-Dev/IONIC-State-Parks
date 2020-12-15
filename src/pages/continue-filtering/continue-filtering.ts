import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";

@IonicPage()
@Component({
  selector: 'page-continue-filtering',
  templateUrl: 'continue-filtering.html',
})
export class ContinueFilteringPage {

  search = {
    ProductId: 0,
    SubProductTags: [{
      SubProductId: 0,
      SubProduct: {}
    }]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopbook: Shopbook) {
  }

  ionViewDidLoad() {
    let subProduct = this.navParams.get("subproduct");
    this.search = {
      ProductId: subProduct.ProductId,
      SubProductTags: [{
        SubProductId: subProduct.Id,
        SubProduct: subProduct
      }]
    }
  }


  filterMore(){
    let index = -1;
    this.navCtrl.push("CreateSearchPricePage", {
      "search" : this.search,
      "index"  : index
    });
  }

  continuWithoutFilter(){
    this.navCtrl.push("SearchResultPage", {
      "search": this.search,
      "isNew" : true      
    }).then(() => {
      this.navCtrl.remove(1,2);
    });
  }


}
