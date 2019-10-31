import { Component, OnInit } from '@angular/core';
import { Herobis } from 'src/app/shared/interfaces/hero-bis';
import { HeroBisService } from 'src/app/shared/services/hero-bis.service';

@Component({
  selector: 'app-unsorted-heroes',
  templateUrl: './unsorted-heroes.component.html',
  styleUrls: ['./unsorted-heroes.component.scss'],
  providers: [HeroBisService]
})
export class UnsortedHeroesComponent implements OnInit {
  heroes: Array<Herobis>;

  constructor(private heroBisService: HeroBisService) { }
  ngOnInit() {
    this.heroes = this.heroBisService.getAllHeroes();
    this.afterGetHeroes();

  }
  protected afterGetHeroes() {

  }
}


@Component({
  selector: 'app-sorted-heroes',
  templateUrl: './sorted-heroes.component.html',
  providers: [HeroBisService]
})
export class SortedHeroesComponent  extends UnsortedHeroesComponent  implements OnInit {
  heroes: Array<Herobis>;
  constructor(heroBisService: HeroBisService) {
    super(heroBisService);
  }

  protected afterGetHeroes() {
    this.heroes = this.heroes.sort((h1, h2) => {
      return h1.name < h2.name ? -1 :
            (h1.name > h2.name ? 1 : 0);
    });
  }
}






