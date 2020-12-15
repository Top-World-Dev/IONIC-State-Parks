import { Component } from '@angular/core';

@Component({
  selector: 'search-item',
  templateUrl: 'search-item.html'
})
export class SearchItemComponent {

  text: string;

  constructor() {
    console.log('Hello SearchItemComponent Component');
    this.text = 'Hello World';
  }

}
