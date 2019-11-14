import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesListTestComponent } from './heroes-list-test/heroes-list-test.component';
import { HeroesDetailTestComponent } from './heroes-detail-test/heroes-detail-test.component';


const routes: Routes = [
  {path: 'heroes-list-test', component: HeroesListTestComponent },
  {path: 'heroes-detail-test/:id', component: HeroesDetailTestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRouterRoutingModule { }
