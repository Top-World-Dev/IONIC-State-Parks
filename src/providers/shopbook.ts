import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { AppRate } from '@ionic-native/app-rate';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EmailComposer } from '@ionic-native/email-composer';
import { Constants } from './constants';
import { OneSignal } from '@ionic-native/onesignal';
import { retry } from 'rxjs/operator/retry';


// declare var cordova: any;


@Injectable()
export class Shopbook {

    constructor(
      private platform: Platform,
      private statusbar: StatusBar,
      private appRate: AppRate,
      private iab: InAppBrowser,
      private oneSignal: OneSignal,
      private constants: Constants,
      private emailComposer: EmailComposer
      ) {
    }

    private tokenName = "token";
    private hiddenNewslettersKey = "hiddenNewsLetters";
    private seenNewslettersIdsKey = "seenNewslettersIdsKey"
    private favouriteparkIdsKey = "favouriteparkIdsKey"

    private myaccount = null;
    private changeFilters = false;
    private playerId = "";
    private notificationOpenedActions = [];
    private onAppLaunch = [];
    private quizStateUpdatedActions = [];
    private onHiddesIdChangeListeners = [];
    // private searchesKey = "searchs";
    welcomed = false;

    private googleLink = null;

    isLoggedIn() {
        let token = localStorage.getItem(this.tokenName);
        if (token == null) return true;
        else {
            this.setAccessToken(token);
            return true;
        }
    }

    
    initOnesignal(askPermission: boolean) {
      if (askPermission) {
        this.oneSignal.startInit(
          "73e13c50-ce06-4982-b676-d92423b19d2b",
          "687364916245"
        );
      }

      this.oneSignal.inFocusDisplaying(
        this.oneSignal.OSInFocusDisplayOption.Notification
      );

      this.oneSignal.handleNotificationReceived().subscribe(() => {
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        this.notificationOpened();
      });

      this.oneSignal.endInit();

      this.oneSignal.getIds().then(ids => {
        this.setoneSignalPlayerId(ids.userId);
      });
    }

    handleAppOpened(){
      let fromNotification = false;
      this.notificationOpenedActions.push(() => {
        fromNotification = true;
      });
      // if the app didn't report it was opened from notification in 5 sec
      // report that it was opened normally
      
    }

    

    getMyNotifications(success: (data) => any, error?: (err) => any) {
        
    }

    createSearch(searchObj, success: (data) => any, error?: (err) => any) {
        
    }

    getSavedSearches(success: (data) => any, error?: (err) => any) {
        
    }


    editSavedSearch(searchObj, success: (data) => any, error?: (err) => any) {
        
    }

    deleteSavedSearch(search, success: (data) => any, error?: (err) => any) {
        
    }

    deleteNotification(notification, success: (data) => any, error?: (err) => any) {
        
    }

    

    getLatestVersion(platform: string, success: (data) => any, error?: (err) => any){
      
    }

    needsToUpdate(platform: string, currentVersion: string, success: (data) => any, error?: (err) => any){
      
    }


    hideStatusbar() {
        if (this.platform.is("android")) {
            this.statusbar.hide();
        }
    }

    showStatusBar() {
        this.statusbar.show();
    }

    setAccessToken(token: string) {
        localStorage.setItem(this.tokenName, token);
        
    }

    getAccessToken() {
        return localStorage.getItem(this.tokenName);
    }

    logout(success: (data) => any, error?: (err) => any) {
        localStorage.removeItem(this.tokenName);
        success(null);
    }

    notificationOpened() {
        this.notificationOpenedActions.forEach(act => {
            act();
        });
    }

    onNotificationOpened(action) {
        this.notificationOpenedActions.push(action);
    }

    preferencesChanged() {
        return this.changeFilters;
    }

    setPreferencesChangedHandles() {
        this.changeFilters = false;
    }


    setoneSignalPlayerId(id: string) {
        this.playerId = id;
    }

    setonAppLaunchAction(action) {
        this.onAppLaunch.push(action);
    }


    sendSupportEmail(subject: string, body: string, isHtml: boolean = false){
      this.sendEmail(subject, this.constants.supportEmail, body, isHtml);
    }

    private sendEmail(subject: string, to: string, body: string, isHtml: boolean){
      let email = {
        to,
        subject,
        body,
        isHtml
      };
      this.emailComposer.open(email);
    }

    appLaunches() {
        this.onAppLaunch.forEach(action => {
            action();
        });
    }

    updatePlayerId(success: (data) => any, error?: (err) => any) {
      //this.httpCaller.call(`salesapp/UpdateOnsignalPlayerId?playerId=${this.playerId}`, "POST", true, null, success, error);
    }

    setOnUnAuthorizedListner(action) {
        
    }

    addOnHiddenIdsChangeListener(listener: (ids: number[]) => any){
      this.onHiddesIdChangeListeners.push(listener);
    }

    notifyHiddenIdsChanged(hiddenIds){
      this.onHiddesIdChangeListeners.forEach(listner => {
        listner(hiddenIds);
      });
    }

    
    isAuthCompleted(url: string){
      // https://fashiontoolrpanel.com/#access_token=
      return url.startsWith(this.constants.ProductionUrl + "#access_token=");
    }


    completeAuth(url: string, success: (data) => any, error?: (err) => any){
      this.setAccessToken(this.extractAccessToken(url));
      
    }

    private extractAccessToken(url: string){
      let paramName = "access_token=";
      let start = url.indexOf(paramName) + paramName.length;
      let length = url.indexOf('&token_type') - start;
      return url.substr(start, length);
    }


    
    ///////////////////////TN PARKS WORK///////////////////////////////////////////////////////

    getParksData (success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/alphavis.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        success(json.parks);
      });
      
      
    }

    getCabinsInfo (success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/cabins.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        success(json.cabins);
      });
      
      
    }

    getLodgesInfo (success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/lodges.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        success(json.lodges);
      });
      
      
    }

    getCampGroundsInfo (success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/campgrounds.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        success(json.campgrounds);
      });
      
      
    }

    getParksInfo (success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/parkinfo.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        success(json.parks);
      });
      
      
    }

    getParkInfoByTitle (title, success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/parkinfo.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        var result={};
        for (var i=0; i<json.parks.length; i++){
          if (json.parks[i]["title"]==title){
            result=json.parks[i];
            break;
          }
        }
        success(result);
      });
      
      
    }

    getParkInfoByUrlTitle (urltitle, success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/parkinfo.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        var result={};
        for (var i=0; i<json.parks.length; i++){
          if (json.parks[i]["url_title"]==urltitle){
            result=json.parks[i];
            break;
          }
        }
        success(result);
      });
      
      
    }

    getParkInfoByRelateFacilityUrlTitle (urltitle, success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/parkinfo.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        var result={};
        var found=false;
        for (var i=0; i<json.parks.length; i++){
          for (var j=0; j<json.parks[i]["park_facilities_relate"].length;j++){
            if (json.parks[i]["park_facilities_relate"][j]["url_title"]==urltitle){
              result=json.parks[i];
              found=true;
              break;
            }
          }
          if (found==true){
            break;
          }
        }
        success(result);
      });
      
      
    }

    setFavouritePark(park, success: (data) => any, error?: (err) => any){
      var seenIds = JSON.parse(localStorage.getItem(this.favouriteparkIdsKey));
      if(!seenIds){
        seenIds = [];
      }
      if (seenIds.indexOf(parseInt(park.park_id))>-1){
        seenIds.splice(seenIds.indexOf(parseInt(park.park_id)),1);
        localStorage.setItem(this.favouriteparkIdsKey, JSON.stringify(seenIds));
        success(true);
        return;
      }
      seenIds.push(parseInt(park.park_id));
      localStorage.setItem(this.favouriteparkIdsKey, JSON.stringify(seenIds));
      success(true);
    }
      
    isFavouritePark(parkId, success: (data) => any, error?: (err) => any){
      var seenIds = JSON.parse(localStorage.getItem(this.favouriteparkIdsKey));
      if(!seenIds){
        seenIds = [];
        error(false);
      }
      else{
        if (seenIds.indexOf(parseInt(parkId))>-1){
          success(true);
        }
        else{
          error(false);
        }
      }
    }

    getAllEventsData (success: (data) => any, error?: (err) => any) {
      fetch('./assets/json/events.json').then(res => res.json())
      .then(json => {
        //return json;
        //console.log(json);
        success(json.Events);
      });
      
      
    }

      getEventsOfAPark(parkname, success: (data) => any, error?: (err) => any){
        fetch('./assets/json/events.json').then(res => res.json())
        .then(json => {
          var result=[];
          for (var i = 0; i < json["Events"].length; i++) {
            if (json["Events"][i]["Account"]==parkname){
              result.push(json["Events"][i]);
            }
          }
          success(result);
        });
      }
      
    
      
}
