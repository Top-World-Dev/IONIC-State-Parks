import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Shopbook } from "../../providers/shopbook";
import { AppService } from "../../providers/app.service";


@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {

  filter = {
    MallId: 0,
    MallName: "All",
    SaleCategories: [],
    StoreTypes: [],
    Stores: []
  }

  Malls = [];
  StoreTypes = [];
  Categories = [];
  Stores = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController, private shopbook: Shopbook,
    public alertCtrl: AlertController,
    private appService: AppService) {
  }

  ionViewDidLoad() {
    
  }

  selectAll() {
    this.filter.Stores = [];
    this.Stores.forEach(store => {
      store.selected = true;
      this.filter.Stores.push(store);
    });
  }

  deselectAll() {
    this.filter.Stores = [];
    this.Stores.forEach(store => {
      store.selected = false;
    });
  }

  selected(obj, type: string) {
    obj.selected = !obj.selected;
    if (obj.selected) {
      this.filter[type].push(obj);
    } else {
      this.filter[type].forEach(o => {
        if (o.Id == obj.Id) {
          this.filter[type].splice(this.filter[type].indexOf(o), 1);
        }
      });
    }
  }

  clearFilters() {
    
  }

  doFilter() {
    this.filter.MallName = "All";
    this.Malls.forEach(mall => {
      if (mall.Id == this.filter.MallId) {
        this.filter.MallName = mall.Name;
      }
    });
    if (this.filter.MallId == 0
      && this.filter.SaleCategories.length == 0
      && this.filter.Stores.length == 0
      && this.filter.StoreTypes.length == 0) {
      let prompt = this.alertCtrl.create({
        title: 'Warning',
        message: "You didn't select any filter, all alerts will show",
        buttons: [
          {
            text: 'Go Back',
            handler: data => {

            }
          },
          {
            text: 'Continue',
            handler: data => {
              this.viewCtrl.dismiss(this.filter);
            }
          }
        ]
      });
      prompt.present();
    }
    else {
      this.viewCtrl.dismiss(this.filter);
    }
  }

  cancel() {
    this.viewCtrl.dismiss();
  }


}
