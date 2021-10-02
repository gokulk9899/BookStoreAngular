import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value:any[],filterCategory:any): any[] {
    const resultArray = [];
    if(value.length==0 || filterCategory == ''){
      return value;
    }
    for(const item of value){
      if(item['category']==filterCategory){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
