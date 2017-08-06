import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFiler'
})
export class MyFilerPipe implements PipeTransform {

  transform(value: any, filterCondition: string): any {
    console.log(filterCondition);  
    switch (filterCondition) {
      case 'all':
        return value;
      case 'active':
        return value.filter(item => item.done === false);
      case 'completed':
        return value.filter(item => item.done === true);
     
    }
    return null;
  }

}
