import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashesWhenNull',
  pure: true,
})
export class DashesWhenNullPipe implements PipeTransform {
  transform(value: any): any {
    return value === null || value === undefined ? '--' : value;
  }
}
