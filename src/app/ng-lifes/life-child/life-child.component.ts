import { Component, OnInit, Input, Inject, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-child',
  templateUrl: './life-child.component.html',
  styleUrls: ['./life-child.component.scss']
})
export class LifeChildComponent implements OnInit, OnChanges, DoCheck {


  @Input() greeting: string;
  @Input() user: {
    name: string;
  };
  message: string = '初始化消息';
  oldUsername: string;
  changeDetected: boolean = false;
  nochange: number = 0;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }
  ngDoCheck(): void {
    // if (this.user.name !== this.oldUsername) {
    //   this.changeDetected = true;
    //   console.log('Docheck: user.name' + this.oldUsername + '变为' + this.user.name);
    //   this.oldUsername = this.user.name;
    // }
    // if (this.changeDetected) {
    //   this.nochange = 0;
    // } else {
    //   this.nochange += 1;
    //   console.log('Docheck:user.name没变化时ngDocheck已经被调用了' + this.nochange);
    // }
    // this.changeDetected = false;
  }
  constructor() { }

  ngOnInit() {

  }

  testing() {
    console.log('这是一个测试');
  }

}
