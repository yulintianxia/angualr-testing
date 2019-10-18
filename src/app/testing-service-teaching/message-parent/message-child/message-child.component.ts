import { Component, OnInit, Optional } from '@angular/core';
import { MessageParent } from 'src/app/shared/interfaces/messageParent.class';

@Component({
  selector: 'app-message-child',
  templateUrl: './message-child.component.html',
  styleUrls: ['./message-child.component.scss']
})
export class MessageChildComponent implements OnInit {

  str: string;
  // 注入parent 组件实例
  constructor(@Optional() private parentComponent: MessageParent) {
    this.str = parentComponent.getStr();
  }

  ngOnInit() {
  }

}
