import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorProvidersService {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/upload/file') === -1) {
      return next.handle(req);
    }
  }
  const delay = 300;
  return createUploadEvents(delay);
}

function createUploadEvents(delay: number) {
  const chunks = 5;
  const total = 12345678;
  const chunkSize = Math.ceil(total / chunks);
  return new observable<HttpEvent<any>>(Observer => {
    Observer.next({ type: HttpEventType.Sent });
    uploadLoop(0);
    function uploadLoop(loaded: number) {
      // N.B.: Cannot use setInterval or rxjs delay (which uses setInterval)
      // because e2e test won't complete. A zone thing?
      // Use setTimeout and tail recursion instead.
      setTimeout(() => {
        loaded += chunkSize;
        if (loaded >= total) {
          const doneResponse = new HttpResponse({
            status: 201,
          });
          Observer.next(doneResponse);
          Observer.complete();
        }
      });
    }
  });
}
