import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdTest]'
})
export class AdTestDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
