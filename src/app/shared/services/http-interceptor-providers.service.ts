import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpEventType, HttpResponse, HttpProgressEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('/upload/file') === -1) {
      return next.handle(req);
    }
    const delay = 300;
    return creatUploadEvents(delay);
  }
}
function creatUploadEvents(delay: number) {
  const chunks = 5;
  const total = 12345678;
  const chunkSize = Math.ceil(total / chunks);
  return new Observable<HttpEvent<any>>(observer => {
    observer.next({ type: HttpEventType.Sent });
    uploadLoop(0);
    function uploadLoop(loaded: number) {
      setTimeout(() => {
        loaded += chunkSize;

        if (loaded >= total) {
          const doneResponse = new HttpResponse({
            status: 201
          });
          observer.next(doneResponse);
          observer.complete();
          return;
        }
        const progressEvent: HttpProgressEvent = {
          type: HttpEventType.UploadProgress,
          loaded,
          total
        };
        observer.next(progressEvent);
        uploadLoop(loaded);
      }, delay);
    }
  });
}

