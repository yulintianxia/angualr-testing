import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private logges: string[] = [];
  
  constructor() { }

  addLog(log: string) {
    this.logges.push(log);
  }
  getLogges() {
    return this.logges;
  }
}
