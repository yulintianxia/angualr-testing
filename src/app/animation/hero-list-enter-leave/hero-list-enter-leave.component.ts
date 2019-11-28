import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroInterface } from 'src/app/shared/interfaces/hero.interface';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-hero-list-enter-leave',
  template: `
  <ul class="heroes">
  app-hero-list-enter-leave
  <li *ngFor="let hero of heroes"
      [@flyInOut]="'in'" (click)="removeHero(hero.id)">
      <div class="inner">
        <span class="badge">{{ hero.id }}</span>
        <span>{{hero.name }}</span>
      </div>
  </li>
</ul>
  `,
  styleUrls: ['./hero-list-enter-leave.component.scss'],
  animations: [
    trigger('flyInout', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void=>*', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('*=>void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent implements OnInit {
  @Input() heroes: HeroInterface[];
  @Output() remove = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  removeHero(id: number) {
    this.remove.emit(id);
  }

}
