import { Directive, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appMySpy]'
})
export class MySpyDirective implements OnInit, OnDestroy {

  constructor() { }
  ngOnInit() {
    this.log('ngOninit');
  }
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  log(value: string): void {
    console.log(value);
  }

}
