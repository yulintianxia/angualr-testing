import { Injectable } from '@angular/core';
import { LoggerdebugService } from './loggerdebug.service';

@Injectable({
  providedIn: 'root'
})
export class DateLoggerService extends LoggerdebugService {
  constructor() {
    super();
  }
  logInfo(msg: any) { super.logInfo(stamp(msg)); }
  logDebug(msg: any) { super.logInfo(stamp(msg)); }
  logError(msg: any) { super.logError(stamp(msg)); }

  // testStamp(msg: string) {
  //   this.stamp(msg);
  // }
  // private stamp(msg: any) {
  //   return msg + ' at ' + new Date();
  // }
}
function stamp(msg: any) {
  return msg + ' at ' + new Date();
}

