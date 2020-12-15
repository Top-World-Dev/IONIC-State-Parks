import { Component } from '@angular/core';

@Component({
  selector: 'selection-box',
  templateUrl: 'selection-box.html'
})
export class SelectionBoxComponent {

  text: string;

  constructor() {
    console.log('Hello SelectionBoxComponent Component');
    this.text = 'Hello World';
  }

}
