import { Component, OnInit } from '@angular/core';
import { Subject, of, from } from 'rxjs';

@Component({
  selector: 'app-testing-rx',
  templateUrl: './testing-rx.component.html',
  styleUrls: ['./testing-rx.component.scss']
})
export class TestingRxComponent implements OnInit {
  subjects = new Subject<number>();
  constructor() { }

  ngOnInit() {
    /* 基础用法, Subject多播 */
    this.testing();
    // this.subjects.next(1);
    // this.subjects.next(2);
    this.testChecked();
  }
  testing() {
    this.subjects.subscribe((v) => {
      console.log(v);
    });
    this.subjects.subscribe((v) => {
      console.log(v);
    });
  }
  testChecked() {
    let observable = from([1, 2, 3, 4]);
    observable.subscribe(this.subjects);
  }

}
