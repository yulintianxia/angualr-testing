import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdhost]'
})
export class AdhostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
