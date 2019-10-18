import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HeroService } from '../shared/services/hero.service';
import { HeroInterface } from '../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<HeroInterface[]>;

  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
  search(term: string) {
    this.searchTerm.next(term);
  }



}
