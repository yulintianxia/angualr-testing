import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HeroInterface } from '../interfaces/hero.interface';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }
  getHeroes(): Observable<HeroInterface[]> {
    this.log('fetched heroes');
    return this.http.get<HeroInterface[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getheroes', []))
    );
  }

  getHero(id: number): Observable<HeroInterface> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<HeroInterface>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<HeroInterface>(`getHero id=${id}`))
    );
  }

  updateHero(hero: HeroInterface): Observable<any> {
    return this.http.put<any>(this.heroesUrl, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: HeroInterface): Observable<HeroInterface> {
    return this.http.post<HeroInterface>(this.heroesUrl, this.httpOptions).pipe(
      tap((newHero: HeroInterface) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<HeroInterface>('addHero'))
    );
  }

  deleteHero(hero: HeroInterface | number): Observable<HeroInterface> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<HeroInterface>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<HeroInterface>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<HeroInterface[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<HeroInterface[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<HeroInterface[]>('searchHeroes', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.error(err);
      this.log(`${operation} failed: ${err.message}`);
      return of(result as T);
    };
  }
}
