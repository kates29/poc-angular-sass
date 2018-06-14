import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log(items);
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( it => {
      console.log(it);
      return it.preg.indexOf(searchText)>-1;
    });
   }
}