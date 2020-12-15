import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'pref-item',
  templateUrl: 'pref-item.html'
})
export class PrefItemComponent {

  @Input('item') item;

  constructor() {
  }

  ngAfterViewInit(){
  }

  itemSelected(){
    this.item.selected = !this.item.selected;
  }
}
