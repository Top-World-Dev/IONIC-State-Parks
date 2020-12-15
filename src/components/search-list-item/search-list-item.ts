import { Component } from '@angular/core';

/**
 * Generated class for the SearchListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-list-item',
  templateUrl: 'search-list-item.html'
})
export class SearchListItemComponent {

  text: string;

  constructor() {
    console.log('Hello SearchListItemComponent Component');
    this.text = 'Hello World';
  }

}
