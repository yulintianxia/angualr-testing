import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { searchUrl } from '../services/package-serach.service';
import { RequestCache } from '../HttpInterceptor/request-cache-with-map.service';
import { Observable } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CachingInterceptorService implements HttpInterceptor {
  constructor(
    private cache: RequestCache
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!isCachable(req)) {
      return next.handle(req);
    }
    const cachedResponse = this.cache.get(req);
    if (req.headers.get('x-refresh')) {
      const result$ = sendrequest(req, next, this.cache);
      return cachedResponse ? result$.pipe(startWith(cachedResponse)) : result$;
    }
  }
}

function isCachable(req: HttpRequest<any>) {
  return req.method === 'GET' && -1 < req.url.indexOf(searchUrl);
}

function sendrequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCache
): Observable<HttpEvent<any>> {
  const noHeaderReq = req.clone({ headers: new HttpHeaders() });
  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event);
      }
    })
  );
}


