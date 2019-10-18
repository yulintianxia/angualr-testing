import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';
import { HeroInterface } from '../shared/interfaces/hero.interface';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero: HeroInterface;
  heroes: HeroInterface[];
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeros();
  }
  onSelect(hero: HeroInterface) {
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
    this.heroService.addHero({ name } as HeroInterface)
      .subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: HeroInterface): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
