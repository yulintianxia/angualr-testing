import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { searchUrl } from '../services/package-serach.service';
import { RequestCache } from '../HttpInterceptor/request-cache-with-map.service';


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
  }


}

function isCachable(req: HttpRequest<any>) {
  return req.method === 'GET' && -1 < req.url.indexOf(searchUrl);
}
