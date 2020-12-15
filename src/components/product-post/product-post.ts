import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ProductPostComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'product-post',
  templateUrl: 'product-post.html',
})
export class ProductPostComponent {

  @Input("product") product: any;
  @Input("currency") currency: string;
  @Input("LookName") lookName: string;
  @Input("saved") saved = false;
  @Output() toggleSave = new EventEmitter()
  @Output() negativeRating = new EventEmitter()
  @Output() positiveRating = new EventEmitter()

  constructor() {

  }

  toggleSavedPost(){
    this.toggleSave.emit();
  }

  negativeRatingClick(){
    this.negativeRating.emit();
    event.preventDefault(); 
    event.stopPropagation(); 
    
  }

  positiveRatingClick(){
    this.positiveRating.emit();
    event.preventDefault(); 
    event.stopPropagation(); 
  }


}
