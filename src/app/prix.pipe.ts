import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prix'
})
export class PrixPipe implements PipeTransform {

  transform(prix:number): string {
    if(prix==0)
    return "FREE";
  else
  return prix+" DT";
  }

}
