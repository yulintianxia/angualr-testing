import { Component, OnInit, forwardRef, SkipSelf, Optional } from '@angular/core';
import { MessageParent } from '../../shared/interfaces/messageParent.class';

@Component({
  selector: 'app-message-parent',
  templateUrl: './message-parent.component.html',
  styleUrls: ['./message-parent.component.scss'],
  providers: [
    { provide: MessageParent, useExisting: forwardRef(() => MessageParentComponent) }
  ]
})
export class MessageParentComponent implements OnInit {

  str: string;
  constructor(@SkipSelf() @Optional() private appComponent: MessageParent) {
    this.str = appComponent.getStr();
  }

  ngOnInit() {
  }
  getStr() {
    return 'parent component';
  }
}
