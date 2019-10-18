import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { VoterComponent } from '../voter/voter.component';
@Component({
  selector: 'app-voter-parent',
  template: `

  <h2>Should mankind colonize the Universe?</h2>
  <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>
  <button (click)='appvoter.getNum(num)'>获取子组件的值<button>
   <app-voter>33333</app-voter>
  `,
  // // styleUrls: ['./voter-parent.component.scss']
  // styles: ['']
})
export class VoterParentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Narco', 'Celeritas', 'Bombasto'];
  constructor() { }

  ngOnInit() {
  }
  getValue(value: boolean): void {
    console.log(value);
  }

  // @ViewChild(VoterComponent, { static: false })
  // private timerComponent: VoterComponent;

  // ngAfterContentInit() {
  //   setTimeout(() => {
  //     console.log(111);
  //   });
  // }



}
