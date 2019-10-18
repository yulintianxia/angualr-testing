import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';
import { HeroInterface } from '../shared/interfaces/hero.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: HeroInterface[] = [];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
