import { Component, Input } from '@angular/core';

@Component({
  selector: 'pref-list',
  templateUrl: 'pref-list.html'
})
export class PrefListComponent {

  @Input('items') items;
  @Input('title') title: string;
  @Input('subTitle') subTitle: string;

  constructor() {
  }

}
