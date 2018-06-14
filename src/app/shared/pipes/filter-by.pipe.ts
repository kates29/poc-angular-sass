import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    searchText = searchText.toLowerCase();
    if(!items) return [];
    if(!searchText) return items;
    return items.filter( it => {
      return (it.preg.toLowerCase().indexOf(searchText)>-1||it.res.toLowerCase().indexOf(searchText)>-1) ;
    });
   }
}