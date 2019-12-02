import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PagenotfindComponent } from './pagenotfind/pagenotfind.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthGuard } from './shared/services/auth.guard';
import { OpenCloseComponent } from './animation/open-close/open-close.component';
import { HeroListEnterLeaveComponent } from './animation/hero-list-enter-leave/hero-list-enter-leave.component';
import { InsertRemoveComponent } from './animation/insert-remove/insert-remove.component';
import { HeroListPageComponent } from './animation/hero-list-page/hero-list-page.component';
import { StatusSliderComponent } from './animation/status-slider-component/status-slider-component.component';


const routes: Routes = [
  {
    path: 'slideStatus', component: StatusSliderComponent
  },
  {
    path: 'hero-list-page', component: HeroListPageComponent
  },
  {
    path: 'insert-remove', component: InsertRemoveComponent
  },
  {
    path: 'enter-leave', component: HeroListEnterLeaveComponent
  },
  {
    path: 'open-close', component: OpenCloseComponent
  },
  {
    path: 'compose', component: ComposeMessageComponent, outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    data: { preload: true }
  },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroelist', component: HeroListComponent },
  { path: '**', component: PagenotfindComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // enableTracing: true,// <-- debugging purposes only
      preloadingStrategy: PreloadAllModules
    }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
