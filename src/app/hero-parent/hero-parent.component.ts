import { Component, OnInit } from '@angular/core';
import { HEROES } from '../shared/interfaces/heroData';
import { HeroInterface } from '../shared/interfaces/hero.interface';


@Component({
  selector: 'app-hero-parent',
  template: `
  <h2>Source code version</h2>
  <button (click)="newMinor()">New minor version</button>
  <button (click)="newMajor()">New major version</button>
  <app-hero-child [major]="major" [minor]="minor"></app-hero-child>
  `,
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {
  heroes: HeroInterface[] = HEROES;
  master = 'Masters';
  names = ['Dr IQ', '   ', '  Bombasto  '];
  major = 1;
  minor = 23;
  constructor() { }

  ngOnInit() {
  }
  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
