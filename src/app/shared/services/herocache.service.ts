import { Injectable } from '@angular/core';
import { Herobis } from '../interfaces/hero-bis';
import { HeroBisService } from './hero-bis.service';


@Injectable()
export class HerocacheService {
  hero: Herobis;
  constructor(private herobis: HeroBisService) { }
  fetchCachedHero(id: number) {
    console.log(this.hero);
    if (!this.hero) {
      this.hero = this.herobis.getHeroById(id);
    }
    return this.hero;
  }
}
