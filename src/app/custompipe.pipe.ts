import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any,n:number): any {
    if(!n) return value;
    return value.filter(val => val === n);
  }

}
