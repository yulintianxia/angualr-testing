import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Herodi, HeroReturn } from '../../../shared/interfaces/hero-di';
import { HeroDiService } from 'src/app/shared/services/hero-di.service';
@Component({
  selector: 'app-hero-list-component',
  template: `
    <div>
    <h3>Hero Tax Returns</h3>
    <ul>
    <li *ngFor="let hero of heroes | async"
    (click)="showTaxReturn(hero)">{{hero.name}}</li>
    </ul>
    <app-hero-tax-return
    *ngFor='let selected of selectedTaxReturns;let i =index'
    [taxReturn]="selected"
    (close)="closeTaxReturn(i)">
    ></app-hero-tax-return>
    </div>
  `,
  styleUrls: ['./hero-list-component.component.scss']
})
export class HeroListComponentComponent implements OnInit {
  heroes: Observable<Herodi[]>;
  selectedTaxReturns: HeroReturn[] = [];
  constructor(private heroService: HeroDiService) {
    this.heroes = heroService.getHeroes();
  }

  showTaxReturn(hero: Herodi) {
    this.heroService.getHeroReturn(hero)
      .subscribe(htr => {
        if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
          this.selectedTaxReturns.push(htr);
        }
      });
  }
  closeTaxReturn(ix: number) {
    this.selectedTaxReturns.splice(ix, 1);
  }


  ngOnInit() {
  }

}
