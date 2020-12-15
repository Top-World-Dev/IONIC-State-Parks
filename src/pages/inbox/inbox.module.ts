import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(InboxPage),
  ],
})
export class InboxPageModule {}
