import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { HandleError, HttpErrorService } from './http-error.service';
import { HeroHttp } from '../interfaces/hero-http.interface';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HeroHttpService {
  heroesUrl = 'api/heroes';
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorService
  ) {
    this.handleError = httpErrorHandler.creatHandleError('HeroesService');
  }

  getHeroes(): Observable<HeroHttp[]> {
    return this.http.get<HeroHttp[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  searchHeroes(term: string): Observable<HeroHttp[]> {
    term = term.trim();
    const options = term ? {
      params: new HttpParams().set('name', term)
    } : {};
    return this.http.get<HeroHttp[]>(this.heroesUrl, options)
    .pipe(
      catchError(this.handleError('searchHeroes', []))
    );
  }
}
