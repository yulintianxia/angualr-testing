import { Component, OnInit, Self, Optional } from '@angular/core';
import { LoggerService } from 'src/app/shared/services/logger.service';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.scss']
})
export class ServiceChildComponent implements OnInit {
  // Self在自己组建内查找服务,Optional没有该服务返回null,不会报错;
  constructor(@Optional() @Self() private loggerService: LoggerService) { }


  ngOnInit() {
  }
  addLog() {
    if (this.loggerService) {
      this.loggerService.addLog('add log from child component');
    }
  }

}
