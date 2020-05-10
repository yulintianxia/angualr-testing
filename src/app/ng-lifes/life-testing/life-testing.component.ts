import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  SimpleChanges,
  Input,
  ViewChild
} from '@angular/core';
import { LifeChildComponent } from '../life-child/life-child.component';


let logIndex: number = 1;
@Component({
  selector: 'app-life-testing',
  templateUrl: './life-testing.component.html',
  styleUrls: ['./life-testing.component.scss']
})
export class LifeTestingComponent implements OnInit, OnChanges,
  OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked {

  @ViewChild('child1')
  child1: LifeChildComponent;
  /* 父组件 */
  greeting: string = 'Hello word';
  user = { name: 'jsrao' };

  @Input()
  name: string;
  constructor() {
    this.logIt('name属性在constructor里的值:' + name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'].currentValue;
    // this.logIt('name属性在ngOnChanges的值' + name);
  }
  ngOnInit() {
    // this.logIt('ngOnInit');
  }

  ngDoCheck(): void {
    this.logIt('ngDoCheck');
  }
  ngAfterContentInit(): void {
    // this.logIt('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // this.logIt('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // this.logIt('ngAfterViewInit');
      console.log('父组件');
      this.child1.testing();
  }
  ngAfterViewChecked(): void {
    // this.logIt('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // this.logIt('ngOnDestroy');
  }
  logIt(msg: string) {
    console.log(`${logIndex++} ${msg}`);
  
  }




}
