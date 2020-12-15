import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tags-list',
  templateUrl: 'tags-list.html'
})
export class TagsListComponent {

  @Input('tags') tags = [];
  @Input('selectedItem') item;
  @Input('single') single = true; 
  @Output('selectedItemChange') selectedItemChange = new EventEmitter();

  constructor() {
  }


  tagSelected(item){
    if(this.single){
      this.tags.forEach(tag => {
        tag.selected = false;
      });
      item.selected = true;
      this.item = item;
      this.selectedItemChange.emit(item);
    }
    else {
      if(item.selected){
        item.selected = false;
        this.item.splice(this.item.indexOf(item), 1);  
        this.selectedItemChange.emit(this.item);
      }
      else {
        item.selected = true;
        this.item.push(item);
        this.selectedItemChange.emit(this.item);
      }
    }
  }

}
