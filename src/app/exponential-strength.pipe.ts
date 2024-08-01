import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
  standalone: true
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(value: number, exponent:number): unknown {
    let args=exponent;
    return Math.pow(value,args)
  }

}
