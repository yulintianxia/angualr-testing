import { Injectable } from '@angular/core';
import { HttpmessageService } from './httpmessage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export type HandleError = <T>(operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;


@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private messageService: HttpmessageService) { }
  creatHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.hanleError(serviceName, operation, result)
  hanleError<T>(serviceName = '', operation = 'operation', result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.log(error);
      const message = (error.error instanceof ErrorEvent) ? error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;
      this.messageService.add(`${serviceName}: ${operation} failed: ${message}`);
      return of(result);
    };
  }
}
