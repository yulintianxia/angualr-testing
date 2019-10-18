import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { reduce } from 'rxjs/operators';


@Component({
  selector: 'app-sizer',
  template: `
   <div>
   <button (click)="dec()" title="smaller">-</button>
   <button (click)="inc()" title="bigger">+</button>
   <label [style.font-size.px]="size">FontSize: {{size}}px</label>
   <div [class.changecolor]="testing">只是一个class测试</div>
   </div>
   <div [ngClass]='styles'>只是一个ngClass测试</div>
   <div [style.fontSize]='fontSize'>只是一个style测试</div>
   <div [ngStyle]='styleGroup'>只是一个ngStyle测试</div>
   <div [hidden]='isHidden'>只是一个isHidden测试 {{isHidden}}</div>
   <div [hidden]='!isHidden'>只是一个!isHidden测试</div>
   <div [ngSwitch]='emotion'>
      <p *ngSwitchCase="'sad'">只是sad</p>
      <p *ngSwitchCase="'happy'">只是happy</p>
      <p *ngSwitchCase="'lucky'">只是lucky</p>
      <p *ngSwitchDefault>这是默认的</p>
   </div>
   <input type='text' #input (keyup.enter)='getValue(input.value)' />
   <style>
    .changecolor{
      color: red;
    }
    .colors{
      color:yellow;
    }
    .bg {
      background-color: blue;
    }
  </style>
  `,
})
export class SizerComponent implements OnInit {
  @Input() size: number;
  @Output() sizeNumChange = new EventEmitter<number>();
  testing: boolean = true;
  isHidden = false;
  styles: object = {
     colors: true,
     bg: true
  };
  fontSize: string = '35px';
  styleGroup = {
    'font-size': '50px',
    'font-weight': '50px',
    background: 'red'
  };
  emotion: string = '默认的';
  constructor() { }

  ngOnInit() {
  }

  resize(num: number) {
    this.size = Math.min(40, Math.max(8, + this.size + num));
    console.log(this.size);
    this.sizeNumChange.emit(this.size);
  }
  dec() {
    this.resize(-1);
  }

  inc() {
    this.resize(+1);
  }
  getValue(value: string) {
    console.log(value);
  }

}
