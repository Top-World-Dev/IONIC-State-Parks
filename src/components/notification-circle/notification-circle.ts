import { Component, Input } from '@angular/core';

/**
 * Generated class for the NotificationCircleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'notification-circle',
  templateUrl: 'notification-circle.html'
})
export class NotificationCircleComponent {

  @Input("img") image = "";
  @Input("num") num = 0;
  @Input("showNum") showNum: boolean = false;

  constructor() {
  }

}
