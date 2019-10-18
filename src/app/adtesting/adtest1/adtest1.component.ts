import { Component, OnInit, Input } from '@angular/core';
import { Adscomponent } from '../../shared/interfaces/ad.interface';

@Component({
  selector: 'app-adtest1',
  template: `<div class="job-ad">
  <h4>{{data.headline}}</h4>
  {{data.body}}
  </div>
  `,
  styleUrls: ['./adtest1.component.scss']
})
export class Adtest1Component implements OnInit, Adscomponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
