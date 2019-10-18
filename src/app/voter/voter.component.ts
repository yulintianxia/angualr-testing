import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4 >{{name}}33</h4>
    <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
    <button  [disabled]="didVote">Disagree</button>
    <ng-content></ng-content>
  `,
  // styles: [':host{color:blue;}']
})
export class VoterComponent implements OnInit {
  name: 'voted';
  didVote = false;
  @Output() voteValue = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  vote(agree: boolean) {
    this.voteValue.emit(agree);
    this.didVote = true;
  }
  getNum() {
    console.log(222);
  }

}
