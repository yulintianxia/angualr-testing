import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-hero-child',
  template: `
   <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `,
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent implements OnInit, OnChanges {
  // @Input() hero: Hero;
  // @Input('master') masterName: string;
  private _name = '';
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];
  constructor() { }
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  ngOnInit() {
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changes[propName].previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }

}
