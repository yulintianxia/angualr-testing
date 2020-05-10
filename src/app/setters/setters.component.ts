import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setters',
  templateUrl: './setters.component.html',
  styleUrls: ['./setters.component.scss']
})
export class SettersComponent implements OnInit {
  detail: any = {};
  constructor() { }

  ngOnInit() {
  }
  collect() {
    this.detail.collection === 0 ? this.detail.collection = 1 : this.detail.collection = 0;
  }

}
