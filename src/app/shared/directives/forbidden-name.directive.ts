import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, Validators, Validator, NG_VALIDATORS } from '@angular/forms';

export function forbiddenValidators(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbiddenName = nameRe.test(control.value);
    return forbiddenName ? { 'forbiddenName': { value: control.value } } : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenNameDirective, multi: true }]
})
export class ForbiddenNameDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;
  constructor() {}
  validate(control: AbstractControl): {[key: string]: any } | null {
    return this.forbiddenName ? forbiddenValidators(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}



