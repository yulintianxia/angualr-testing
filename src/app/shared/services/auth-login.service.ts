import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  isLoggedIn = false;
  /* store the URL so we can redirect after logging in */
  redirectUrl: string;

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
