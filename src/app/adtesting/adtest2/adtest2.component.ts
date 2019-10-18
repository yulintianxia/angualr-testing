import { Component, OnInit, Input } from '@angular/core';
import { Adscomponent } from '../../shared/interfaces/ad.interface';

@Component({
  selector: 'app-adtest2',
  template: `<div class="hero-profile">
  <h3>Featured Hero Profile</h3>
  <h4>{{data.name}}</h4>
  <p>{{data.bio}}</p>
  <strong>Hire this hero today!</strong>
  </div>
  `,
  styleUrls: ['./adtest2.component.scss']
})
export class Adtest2Component implements OnInit, Adscomponent {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
