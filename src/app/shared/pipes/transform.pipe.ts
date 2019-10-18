import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: number, exponent?: number): number {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
