import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getColor',
})
export class GetColorPipe implements PipeTransform {
  transform(colorKey: number): string {
    switch (colorKey) {
      case 0:
        return 'Red';

      case 1:
        return 'Black';

      case 2:
        return 'Blue';

      case 3:
        return 'Green';

      default:
        return '';
    }
  }
}
