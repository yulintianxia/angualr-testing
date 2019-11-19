import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad, Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../shared/services/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private authLoginService: AuthLoginService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log(state);
    return this.checkLogin(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  /* 登录权限验证 */
  checkLogin(url: string): boolean {
    if (this.authLoginService.isLoggedIn) {
      return true;
    }
    this.authLoginService.redirectUrl = url;
    // console.log(url);
    this.router.navigate(['/login']);
    return false;
  }
}
