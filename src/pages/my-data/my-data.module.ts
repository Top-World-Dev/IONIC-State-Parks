import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyDataPage } from './my-data';

@NgModule({
  declarations: [
    MyDataPage,
  ],
  imports: [
    IonicPageModule.forChild(MyDataPage),
  ],
})
export class MyDataPageModule {}
