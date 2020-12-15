import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-tag',
  templateUrl: 'select-tag.html'
})
export class SelectTagComponent {

  @Input('item') item;
  @Input('selected') selected = false;
  @Output('onSelected') onSelected = new EventEmitter();

  constructor() {
  }

  select(){
    console.log(`selected clicked, marking the tag as ${!this.selected}`);
    //this.selected = !this.selected;
    this.onSelected.emit(this.item);
  }


}
