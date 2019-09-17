import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interface/hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeros();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  getHeros(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  addHero(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
