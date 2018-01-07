import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSetter'
})
export class TitleSetterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (location.pathname.includes('tinygu.de')) {
      return 'TinyGU'; // return value;
    }
    // if (location.href.includes('about')) { // href gives the whole url while pathname only gives the domain
    if (location.pathname.includes('goethe.link')) {
      return 'Goethe.Link'; // 🔗 &#128279; &#x1F517; http://graphemica.com/%F0%9F%94%97
    } else {
      // return '404';
      return 'Goethe.Link';
    }
  }

}
