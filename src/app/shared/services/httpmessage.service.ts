import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpmessageService {
  message: Array<string> = [];
  constructor() { }
  add(message: string) {
    return this.message.push(message);
  }
  clear() {
    return this.message = [];
  }
}
