import { Component, OnInit, SkipSelf } from '@angular/core';
import { LoggerService } from '../../shared/services/logger.service';

@Component({
  selector: 'app-parentservice',
  templateUrl: './parentservice.component.html',
  styleUrls: ['./parentservice.component.scss'],
  providers: [LoggerService]
})
export class ParentserviceComponent implements OnInit {
 
  // SkipSelf 跳过自己,去父级找到服务
  constructor(@SkipSelf() private loggerService: LoggerService) { }

  ngOnInit() {
  }
  addLog() {
    this.loggerService.addLog('add log from parent component');
  }

}
