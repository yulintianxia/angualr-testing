import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroInterface } from 'src/app/shared/interfaces/hero.interface';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroRouterService } from 'src/app/shared/services/hero-router.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-detail-test',
  templateUrl: './heroes-detail-test.component.html',
  styleUrls: ['./heroes-detail-test.component.scss']
})
export class HeroesDetailTestComponent implements OnInit {
  hero$: Observable<HeroInterface>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servercie: HeroRouterService
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.servercie.getHero(params.get('id'));
      })
    );
    // this.testing();
  }
  testing() {
    this.hero$.subscribe(data => {
      console.log(data);
    });
  }

  gotoHeroes(hero: HeroInterface) {
     let heroId = hero ? hero.id : null;
    // this.router.navigate(['/heroes-list-test', { id: heroId, foo: 'foo' }]);
    this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  }

}
