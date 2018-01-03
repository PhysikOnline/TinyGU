import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSetter'
})
export class TitleSetterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (location.pathname.includes('tinygu')) {
      return 'TinyGU'; // return value;
    }
    // if (location.pathname.includes('goethe.link')) {
    if (location.href.includes('about')) {
      return 'Goethe.Link'; // 🔗 &#128279; &#x1F517; http://graphemica.com/%F0%9F%94%97
    } else {
      // return 'Goethe 🔗 Link'; // &#128279; &#x1F517; http://graphemica.com/%F0%9F%94%97
      // return 'TinyGU'; // return value;
      return '404';
    }
  }

}
