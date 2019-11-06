import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpmessageService {
  messages: Array<string> = [];
  constructor() { }
  add(message: string) {
    return this.messages.push(message);
  }
  clear() {
    return this.messages = [];
  }
}
