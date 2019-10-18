import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../shared/services/hero.service';
import { Location } from '@angular/common';
import { HeroInterface } from '../shared/interfaces/hero.interface';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: HeroInterface;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero).
      subscribe(() => this.goBack());
  }
}
