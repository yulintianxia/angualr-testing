import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HeroInterface } from '../interfaces/hero.interface';
import { HEROES } from '../interfaces/heroData';



@Injectable({
  providedIn: 'root',
})
export class HeroRouterService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<HeroInterface[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number | string) {
    return this.getHeroes().pipe(
      // (+) before `id` turns the string into a number
      map((heroes: HeroInterface[]) => heroes.find(hero => hero.id === +id))
    );
  }
}
