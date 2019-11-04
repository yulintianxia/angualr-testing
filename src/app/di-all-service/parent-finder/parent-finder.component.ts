import { Component, OnInit, Optional, forwardRef, SkipSelf } from '@angular/core';

export abstract class Base {
  name = 'Count basie';
}
export abstract class Parent {
  name: string;
}
const DifferentParent = Parent;

export function provideParent(component: any, parentType?: any) {
  return { provide: parentType || Parent, useExisting: forwardRef(() => component) };
}

export function provideTheParent(component: any) {
  return {
    provide: Parent, useExisting: forwardRef(() => component)
  };
}

@Component({
  selector: 'app-carol',
  templateUrl: './carol.component.html'
})
export class CarolComponent implements OnInit {
  name = 'carol';
  constructor(@Optional() public parent: Parent) { }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-chris',
  templateUrl: './carol.component.html'
})
export class ChrisComponent implements OnInit {
  name = 'Chris';
  constructor(@Optional() public parent: Parent) { }
  ngOnInit() {
  }
}

@Component({
  selector: 'app-craig',
  templateUrl: './craig.component.html'
})
export class CraigComponent implements OnInit {
  name = 'craig';
  constructor(@Optional() public parent: Parent) { }
  ngOnInit() {
  }
}



@Component({
  selector: 'app-barry',
  templateUrl: './barry.component.html',
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
  templateUrl: './bob.component.html',
  providers:  [ provideParent(BobComponent) ]
})
export class BobComponent implements Parent {
  name = 'bob';
  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
  selector: 'app-beth',
  templateUrl: './beth.component.html',
  providers:  [ provideParent(BethComponent, DifferentParent) ]
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
export class AliceComponent implements Parent {
  name = 'Alice';
}

@Component({
  selector: 'app-cathy',
  templateUrl: './cathy.component.html',
  providers: [provideParent(CathyComponent)]
})
export class CathyComponent {
  constructor(@Optional() public alex: AlexComponent) { }
}

@Component({
  selector: 'app-parent-finder',
  templateUrl: './parent-finder.component.html',
  styleUrls: ['./parent-finder.component.scss']
})
export class ParentFinderComponent {

}













