import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/shared/services/auth-login.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  constructor(
    private router: Router,
    private authLoginService: AuthLoginService
  ) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.message = 'logged' + (this.authLoginService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to login in ...';
    this.authLoginService.login().subscribe(() => {
      this.setMessage();
      if (this.authLoginService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the defaul
        let redirect = this.authLoginService.redirectUrl ? this.router.parseUrl(this.authLoginService.redirectUrl) : '/admin';
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigateByUrl(redirect, navigationExtras);

      }
    });
  }

  logout() {
    this.authLoginService.logOut();
    this.setMessage();
  }
}
