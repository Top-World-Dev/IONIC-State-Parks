import { NgModule } from "@angular/core";
import { PrefItemComponent } from "./pref-item/pref-item";
import { PrefListComponent } from "./pref-list/pref-list";
import { CommonModule } from "@angular/common";
import { IonicModule } from "ionic-angular";
import { SearchItemComponent } from "./search-item/search-item";
import { SearchListItemComponent } from "./search-list-item/search-list-item";
import { SelectTagComponent } from "./select-tag/select-tag";
import { TagsListComponent } from "./tags-list/tags-list";
import { ProductPostComponent } from "./product-post/product-post";
import { NotificationCircleComponent } from "./notification-circle/notification-circle";
import { SelectionBoxComponent } from "./selection-box/selection-box";
import { DirectivesModule } from "../directives/directives.module";
import { ConnectedAnimationModule } from "ng-ionic-connectedanim";

@NgModule({
  declarations: [
    PrefItemComponent,
    PrefListComponent,
    SearchItemComponent,
    SearchListItemComponent,
    SelectTagComponent,
    ProductPostComponent,
    TagsListComponent,
    SelectionBoxComponent,
    NotificationCircleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ConnectedAnimationModule.forRoot(),
    DirectivesModule
  ],
  exports: [
    PrefItemComponent,
    PrefListComponent,
    SearchItemComponent,
    ProductPostComponent,
    SearchListItemComponent,
    SelectTagComponent,
    TagsListComponent,
    SelectionBoxComponent,
    NotificationCircleComponent
  ]
})
export class ComponentsModule {}
