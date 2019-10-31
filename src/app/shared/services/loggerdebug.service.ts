import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerdebugService {
  logs: string[] = [];
  constructor() { }
  logInfo(msg: any) {
    this.log(`logInfo: ${msg}`);
  }
  logDebug(msg: any) {
    this.log(`logDebug: ${msg}`);
  }
  logError(msg: any) {
    this.log(`logError: ${msg}`, true);
  }

  private log(msg: string, isErr = false) {
    this.logs.push(msg);
    isErr ? console.error(msg) : console.log(msg);
  }
}
