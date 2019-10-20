import { Injectable } from '@angular/core';
import { Herodi, HeroReturn } from '../interfaces/hero-di';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroDiService {
  heroes: Herodi[] = [
    { id: 1, name: 'RubberMan', tid: '082-27-5678' },
    { id: 2, name: 'Tornado', tid: '099-42-4321' }
  ];

  heroTaxReturns: HeroReturn[] = [
    new HeroReturn(10, this.heroes[0], 35000),
    new HeroReturn(20, this.heroes[1], 1250000)
  ];
  constructor() { }
  getHeroes(): Observable<Herodi[]> {
    return new Observable<Herodi[]>(((observer: Observer<Herodi[]>) => {
      observer.next(this.heroes);
      observer.complete();
    }));
  }

  getHeroReturn(herodi: Herodi): Observable<HeroReturn> {
    return new Observable<HeroReturn>((observer: Observer<HeroReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.hero.id === herodi.id);
      observer.next(htr || new HeroReturn(0, herodi));
      observer.complete();
    });
  }

  saveHeroReturn(heroReturn: HeroReturn): Observable<HeroReturn> {
    return new Observable<HeroReturn>((observer: Observer<HeroReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.id === heroReturn.id);
      if (htr) {
        heroReturn = Object.assign(htr, heroReturn);
      } else {
        this.heroTaxReturns.push(heroReturn);
      }
      observer.next(heroReturn);
      observer.complete();
    });
  }
}
