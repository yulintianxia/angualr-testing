import { Component, OnInit } from '@angular/core';

import { UsercontextService } from '../shared/services/usercontext.service';
import { LoggerdebugService } from '../shared/services/loggerdebug.service';

@Component({
  selector: 'app-di-all-service',
  templateUrl: './di-all-service.component.html',
  styleUrls: ['./di-all-service.component.scss']
})
export class DiAllServiceComponent implements OnInit {
  private userId = 1;
  constructor(logger: LoggerdebugService, public userContext: UsercontextService ) {
    userContext.loadUser(this.userId);
    logger.logInfo('di-all-ServiceComponent initialized');
   }

  ngOnInit() {
  }

}
