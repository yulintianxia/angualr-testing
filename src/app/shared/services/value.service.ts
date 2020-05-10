import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  // tslint:disable-next-line:no-inferrable-types
  index: number = 0;
  list = [];
  sub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  constructor() {

  }

  getList() {
    this.getIndex();
    const list = this.sub.subscribe(() => {
      if (this.index === 1) {
        this.list = [
          {
            value: 1,
            id: 1
          },
          {
            value: 2,
            id: 2
          }
        ];
      } else if (this.index === 2) {
        this.list = [
          {
            value: 3,
            id: 3
          },
          {
            value: 3,
            id: 3
          }
        ];
      } else {
        this.list = [];
      }
      return this.list;
    });
    return list;
  }
  getIndex() {
    this.index += 1;
    console.log(this.list);
    return this.index;
  }


}
