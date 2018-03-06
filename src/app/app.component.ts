import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChildren,
} from '@angular/core';
import { MatDialog } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { stringify } from 'querystring';
import { split } from 'ts-node';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
    // constructor(public dialog: MatDialog, private meta: Meta, private elRef: ElementRef) {
    //   console.log('·········································');
    //   this.meta.addTag({ name: 'test', content: 'test 1' });
    //   // or many at once:
    //   this.meta.addTags([
    //     { name: 'test', content: 'test 2' },
    //     { name: 'test', content: 'test 3' },
    //     ]);
    //
    //   // only gets the first occurrence if the attribute is used multiple times
    //   console.log('tag: ' + this.meta.getTag('name=test').content);
    //   // gets the outer html
    //   this.meta.getTags('name="test"').forEach(value => console.log('html:', value));
    //   // gets the values
    //   this.meta.getTags('name="test"').forEach(value => console.log('content: ' + value.content));
    //   // gets the object
    //   console.log('object: ', this.meta.getTags('name="test"'));
    //
    //   // only updates the first occurrence!
    //   this.meta.updateTag({name: 'test', content: 'abc'});
    //
    //   // only deletes the first occurrence
    //   this.meta.removeTag('name="test"');
    //   // does the same as above but takes an `HTMLTagElement`instead of an attribute selector
    //   this.meta.removeTagElement(this.meta.getTag('name=test'));
    //
    //   console.log('·········································');
  }

  title = 'TinyGU';

  // // @ViewChild('test') myChild: ElementRef;
  // @ViewChildren('test') myChildren; // the class needs to implement AfterViewInit
  // myMap = new Map();
  // ngAfterViewInit() {
  //   console.log('·········································');
  //   // needs:   constructor(private elRef: ElementRef) {
  //   // console.log(this.elRef.nativeElement.querySelector('.test0').innerHTML);
  //
  //   this.myChildren.forEach(value => this.myMap.set(value.nativeElement.getAttribute('name'), value.nativeElement.innerHTML));
  //   console.log(this.myMap);
  //   console.log('·········································');
  // }

  // https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
  // https://stackoverflow.com/questions/36914151/browser-language-detection
  // https://zzz.buzz/2016/01/13/detect-browser-language-in-javascript/

  langDetect() {
    // this.userLang = navigator.language; // || window.navigator.userLanguage;
    // alert('your language: \"' + this.userLang + '\"');
  }
}

// TODO export -> modal
// TODO best praxis? one modal and fill with routes or a modal each?
@Component({
  selector: 'app-login-reminder-dialog',
  template: `
    <app-help></app-help>
    <!--<p>test</p>-->
  `,
  styleUrls: ['./help/help.component.scss'],
})
export class HelpModalComponent {}
