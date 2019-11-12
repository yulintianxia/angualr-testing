import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message.service';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    return next.handle(req).pipe(
      tap(
        event => ok = event instanceof HttpResponse ? 'succeeded' : '',
        error => ok = 'faild'
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        const msg = `${req.method} "${req.urlWithParams}"${ok} in ${elapsed} ms.`;
        this.messageService.add(msg);
      })
    );
  }

  constructor(
    private messageService: MessageService
  ) { }
}
