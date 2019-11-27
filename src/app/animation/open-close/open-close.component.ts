import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        background: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        background: 'green'
      })),
      // transition('open=>closed', [
      //   animate('1s')
      // ]),
      // transition('closed=>open', [
      //   animate('0.5s')
      // ]),
      transition('*=>closed', [
        animate('1s')
      ]),
      transition('*=>open', [
        animate('0.5s')
      ]),
      /* open<=>closed */
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      /* 任意状态切换 */
      transition('open <=> closed', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class OpenCloseComponent implements OnInit {
  Isopen = true;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.Isopen = !this.Isopen;
  }

}
