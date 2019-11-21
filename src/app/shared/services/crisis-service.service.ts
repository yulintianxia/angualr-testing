import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Crisis } from '../interfaces/Crisis.interface';
import { CRISES } from '../interfaces/ciris.data';
import { MessageService } from './message.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  static nextCrisisId = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);
  constructor(
    private message: MessageService
  ) { }

  getCrises() {
    return this.crises$;
  }
  getCrisis(id: number | string) {
    console.log(this.crises$);
    return this.getCrises().pipe(
      map(crises => crises.find(crisis => crisis.id === +id))
    );
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = { id: CrisisService.nextCrisisId++, name };
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}

