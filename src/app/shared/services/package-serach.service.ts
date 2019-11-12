import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorService } from './http-error.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface NpmPackageInfo {
  name: string;
  version: string;
  description: string;
}

export const searchUrl = 'https://npmsearch.com/query';
export const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh': 'true'
  })
};

export function createHttpOptions(packageName: string, refresh = false) {
  // npm package name search api
  // e.g., http://npmsearch.com/query?q=dom'
  const params = new HttpParams({ fromObject: { q: packageName } });
  const headerMap = refresh ? { 'x-refresh': 'true' } : {};
  const headers = new HttpHeaders(headerMap);
  return { params, headers };
}

@Injectable({
  providedIn: 'root'
})
export class PackageSerachService {
  private handlerror: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorService
  ) {
    this.handlerror = httpErrorHandler.creatHandleError('heroService');
  }
  search(packageName: string, refresh = false): Observable<NpmPackageInfo[]> {
    if (!packageName.trim()) {
      return of([]);
    }
    const options = createHttpOptions(packageName, refresh);
    return this.http.get(searchUrl, options).pipe(
      map((data: any) => {
        console.log(data);
        return data.results.map(entry => ({
          name: entry.name[0],
          version: entry.version[0],
          description: entry.description[0]
        } as NpmPackageInfo)
        );
      }),
      catchError(this.handlerror('search', []))
    );
  }
}
