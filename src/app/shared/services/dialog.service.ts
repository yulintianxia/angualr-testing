import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it ok');
    return of(confirmation);
  }
  constructor() { }
}
