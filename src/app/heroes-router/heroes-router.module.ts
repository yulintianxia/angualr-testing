import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRouterRoutingModule } from './heroes-router-routing.module';
import { HeroesDetailTestComponent } from './heroes-detail-test/heroes-detail-test.component';
import { HeroesListTestComponent } from './heroes-list-test/heroes-list-test.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeroesDetailTestComponent, HeroesListTestComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRouterRoutingModule
  ]
})
export class HeroesRouterModule { }
