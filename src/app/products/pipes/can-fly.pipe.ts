import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'flyer' | 'non-flying' {
    return value ? 'flyer' : 'non-flying';
  }
}
