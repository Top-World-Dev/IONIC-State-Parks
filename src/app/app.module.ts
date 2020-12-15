//import { StoresSelectionDialogPage } from './../pages/stores-selection-dialog/stores-selection-dialog';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

import { Constants } from "../providers/constants";
import { Shopbook } from "../providers/shopbook";
import { AppService } from "../providers/app.service";

import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';
import { ImagePicker } from '@ionic-native/image-picker';
import { FileTransfer } from '@ionic-native/file-transfer';
import { OneSignal } from "@ionic-native/onesignal";
import { AppRate } from '@ionic-native/app-rate';
import { InAppBrowser } from '@ionic-native/in-app-browser'
// import { CallNumber } from "@ionic-native/call-number";
// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { EmailComposer } from '@ionic-native/email-composer';
import { SelectionBoxComponent } from "../components/selection-box/selection-box";
import { AppVersion } from '@ionic-native/app-version';
import { Market } from '@ionic-native/market';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
// import { Crashlytics } from '@ionic-native/fabric';
import { ConnectedAnimationModule } from "ng-ionic-connectedanim";
import { IonicStorageModule } from '@ionic/storage';
import { Deeplinks } from '@ionic-native/deeplinks';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      mode: 'md',
      pageTransition: 'ios-transition',
      //iconMode: 'md',
      //backButtonIcon: 'assets/img/double_back_arrow.png'
    }),
    IonicStorageModule.forRoot(),
    SuperTabsModule.forRoot(),
    ConnectedAnimationModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Constants,
    Shopbook,
    // Crashlytics,
    AppService,
    AppVersion,
    ImagePicker,
    FileTransfer,
    OneSignal,
    AppRate,
    Market,
    // FirebaseAnalytics,
    // CallNumber,
    EmailComposer,
    InAppBrowser,
    Deeplinks,
    // BackgroundGeolocation,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
