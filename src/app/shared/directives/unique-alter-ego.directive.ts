import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidateHeroService } from '../services/validate-hero.service';

@Injectable({ providedIn: 'root' })
export class UniqueAlterEgoValidator implements AsyncValidator {
  constructor(private heroesService: ValidateHeroService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log(ctrl);
    console.log(this.heroesService.isAlterEgoTaken(ctrl.value));
    return this.heroesService.isAlterEgoTaken(ctrl.value).pipe(
      map(isTaken => (isTaken ? { uniqueAlterEgo: true } : null)),
      catchError(() => null)
    );
  }
}

@Directive({
  selector: '[appUniqueAlterEgo]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueAlterEgoValidator),
      multi: true
    }
  ]
})
export class UniqueAlterEgoValidatorDirective {
  constructor(private validator: UniqueAlterEgoValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
