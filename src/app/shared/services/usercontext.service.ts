import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LoggerdebugService } from './loggerdebug.service';

@Injectable({
  providedIn: 'root'
})
export class UsercontextService {
  name: string;
  role: string;
  loggedInsince: Date;
  constructor(private userService: UserService, private loggDebug: LoggerdebugService) {
    this.loggedInsince = new Date();
  }

  loadUser(userId: number) {
    let user = this.userService.getUserById(userId);
    this.name = user.name;
    this.role = user.role;
    this.loggDebug.logDebug('loaded user');
  }
}
