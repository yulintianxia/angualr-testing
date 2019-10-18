import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-div',
  templateUrl: './drop-div.component.html',
  styleUrls: ['./drop-div.component.scss']
})
export class DropDivComponent implements OnInit {
  droppedItems = [];
  items = [
    { name: "Apple", type: "fruit" },
    { name: "Carrot", type: "vegetable" },
    { name: "Orange", type: "fruit" }];

  onItemDrop(e: any) {
     console.log(e);
    this.droppedItems.push(e.dragData);
  }
  constructor() { }


  ngOnInit() {
  }

}
