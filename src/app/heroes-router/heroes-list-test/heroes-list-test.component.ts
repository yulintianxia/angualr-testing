import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroInterface } from 'src/app/shared/interfaces/hero.interface';
import { HeroRouterService } from 'src/app/shared/services/hero-router.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes-list-test',
  templateUrl: './heroes-list-test.component.html',
  styleUrls: ['./heroes-list-test.component.scss']
})
export class HeroesListTestComponent implements OnInit {
  heroes$: Observable<HeroInterface[]>;
  selectedId: number;
  constructor(
    private service: HeroRouterService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        console.log(this.selectedId);
        return this.service.getHeroes();
      })
    );
  }

}
