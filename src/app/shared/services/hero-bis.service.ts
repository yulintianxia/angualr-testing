import { Injectable } from '@angular/core';
import { Herobis } from '../interfaces/hero-bis';

@Injectable({
  providedIn: 'root'
})
export class HeroBisService {
  private heroes: Herobis[] = [
    new Herobis(1, 'RubberMan', 'Hero of many talents', '123-456-7899'),
    new Herobis(2, 'Magma', 'Hero of all trades', '555-555-5555'),
    new Herobis(3, 'Dr Nice', 'The name says it all', '111-222-3333')
  ];
  constructor() { }

  getHeroById(id: number): Herobis {
    return this.heroes.find(herobis => herobis.id === id);
  }

  getAllHeroes(): Herobis[] {
    return this.heroes;
  }
}
