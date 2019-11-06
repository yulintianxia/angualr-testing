import { Component, OnInit } from '@angular/core';
import { HeroHttpService } from 'src/app/shared/services/hero-http.service';
import { HeroHttp } from 'src/app/shared/interfaces/hero-http.interface';

@Component({
  selector: 'app-heroes-http',
  templateUrl: './heroes-http.component.html',
  styleUrls: ['./heroes-http.component.scss'],
  providers: [HeroHttpService]
})
export class HeroesHttpComponent implements OnInit {
  heroes: HeroHttp[];
  editHero: HeroHttp;
  constructor(
    private heroService: HeroHttpService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name: string) {
    this.editHero = undefined;
    name = name.trim();
    if (!name) {
      return;
    }
    const newHero: HeroHttp = { name } as HeroHttp;
    this.heroService.addHero(newHero)
      .subscribe(hero => this.heroes.push(hero));
  }
  delete(hero: HeroHttp): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    console.log(this.heroes);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  edit(hero) {
    this.editHero = hero;
  }
  search(searchTerm: string) {
    this.editHero = undefined;
    if (searchTerm) {
      this.heroService.searchHeroes(searchTerm)
        .subscribe(heroes => this.heroes = heroes);
    }
  }
  update() {
    if (this.editHero) {
      this.heroService.updateHero(this.editHero)
        .subscribe(hero => {
          const ix = hero ? this.heroes.findIndex(h => h.id === hero.id) : -1;
          if (ix > -1) {
            this.heroes[ix] = hero;
          }
        });
    }
    this.editHero = undefined;
  }
}
