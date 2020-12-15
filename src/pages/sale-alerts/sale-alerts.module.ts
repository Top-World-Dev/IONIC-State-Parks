import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaleAlertsPage } from './sale-alerts';

@NgModule({
  declarations: [
    SaleAlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(SaleAlertsPage),
  ],
})
export class SaleAlertsPageModule {}
