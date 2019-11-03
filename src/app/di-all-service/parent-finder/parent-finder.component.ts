import { Component, OnInit, Optional, forwardRef, SkipSelf } from '@angular/core';

export abstract class Base {
  name = 'Count basie';
}
export abstract class Parent {
  name: string;
}
const DifferentPaent = Parent;

export function provideParent(component: any, parentType?: any) {
  return { provide: parentType || Parent, useExisting: forwardRef(() => component) }
}




@Component({
  selector: 'app-parent-finders',
  templateUrl: './parent-finders.component.html'
})
export class CraigComponent implements OnInit {
  name = 'carol';
  constructor(@Optional() public alex: Base) { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-parent-finderses',
  templateUrl: './parent-finders.component.html',
  providers: [
    { provide: Parent, useExisting: forwardRef(() => BarryComponent) }
  ]
})
export class BarryComponent implements Parent {
  name = 'Barry';
  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
  selector: 'app-bob',
  templateUrl: './parent-finders.component.html',
  providers: [
    { provide: Parent, useExisting: forwardRef(() => BarryComponent) }
  ]
})
export class BobComponent implements Parent {
  name = 'Barry';
  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
  selector: 'app-beth',
  templateUrl: './parent-finders.component.html',
  providers: [
    { provide: Parent, useExisting: forwardRef(() => BethComponent) }
  ]
})
export class BethComponent implements Parent {
  name = 'Beth';
  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
  selector: 'app-alex',
  templateUrl: './alex.component.html',
  providers: [
    { provide: Parent, useExisting: forwardRef(() => AlexComponent) }
  ]
})
export class AlexComponent extends Base {
  name = 'Alex';
}

@Component({
  selector: 'app-alice',
  templateUrl: './alice.component.html',
  providers: [provideParent(AliceComponent)]
})
export class AliceComponent extends Base {
  name = 'Alice';
}

@Component({
  selector: 'app-cathy',
  templateUrl: './cathy.component.html',
  providers: [provideParent(CathyComponent)]
})
export class CathyComponent {
  constructor( @Optional() public alex: AlexComponent ) { }
}

@Component({
  selector: 'app-parent-finder',
  templateUrl: './parent-finder.component.html',
  styleUrls: ['./parent-finder.component.scss']
})
export class ParentFinderComponent {
  
}












