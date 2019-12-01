import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-status-slider-component',
  templateUrl: './status-slider-component.component.html',
  styleUrls: ['./status-slider-component.component.scss'],
  animations: [
    trigger('slideStatus', [
      state('inactive', style({
        backgroundColor: 'blue'
      })),
      state('active', style({
        backgroundColor: 'orange'
      })),
      transition('*=> inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.2 }),
          style({ backgroundColor: 'orange', offset: 1.0 })
        ]))
      ]),
      transition('*=> active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' })
        ]))
      ])

    ])
  ]
})
export class StatusSliderComponent implements OnInit {

  constructor() { }
  status: 'active' | 'inactive' = 'inactive';

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
  ngOnInit() {
  }

}
