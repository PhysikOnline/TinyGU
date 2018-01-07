import {AfterViewInit, Component, ElementRef, ViewChildren} from '@angular/core';
import { MatDialog } from '@angular/material';
import {APP_BASE_HREF} from '@angular/common';
import {stringify} from 'querystring';
import {split} from 'ts-node';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Meta} from '@angular/platform-browser';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
  easteregg = false;
  userLang = '';
  setLang: string;

  navItems = [
    { name: 'About', route: '/about' },
    { name: 'Account', route: '/account' },
    { name: 'Help', route: '/help' },
  ];

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

  changeLang() {
    this.userLang = navigator.language; // || window.navigator.userLanguage;
    // alert('your language: \"' + this.userLang + '\"');
    console.log('your set language: ' + this.setLang);

    console.log('your language: ' + navigator.language);
    console.log('hostN: ' + location.hostname);
    console.log('pathN: ' + location.pathname);
    console.log('host: ' + location.host);
    console.log('href: ' + location.href);
    console.log('hash: ' + location.hash);
    console.log('origin: ' + location.origin); // ~ const base href

    console.log('stringify(APP_BASE_HREF): ' + stringify(APP_BASE_HREF));

    switch (this.setLang) {
      case 'de':
        if (location.pathname.startsWith('/TinyGU/en/')) {
          // location.href = location.origin + location.pathname.substr(3);
          // location.href = location.href.replace(location.host + '/TinyGU', location.host + '/' + 'en' );//+ '/TinyGU');
          location.href = location.href.replace('/en/', '');
        } else {
          console.log('DE already chosen');
        }
        console.log(location.pathname);
        console.log('search(/^\/acc/i): ' + location.pathname.search(/^\/acc/i));
        console.log('match(/^\/acc/i): ' + location.pathname.match(/^\/acc/i));
        console.log('startsWith(\'/acc\'): ' + location.pathname.startsWith('/acc'));
        console.log('startsWith(\'/en\'): ' + location.pathname.startsWith('/en'));
        console.log('search(/^\/en\//i): ' + location.pathname.search(/^\/en\//i));
        console.log('substr: ' + location.pathname.substr(3));
        console.log('cpmlete string: ' + location.pathname);
        break;
      case 'en':
        if (!location.pathname.startsWith('/TinyGU/en/')) {
          location.href = location.href.replace(location.host + '/TinyGU', location.host + '/TinyGU/en');
        } else {
          console.log('EN already chosen');
        }
        console.log('REPLACE --> ' + location.href.replace(location.host + '/', location.host + '/' + 'en' + '/'));
        console.log('location.href + \'en\': ' + location.href + 'en');
        console.log('EN chosen');
        break;
      default:
        console.log('---  default  ---');
    }

    console.log('href: ' + location.href);
    console.log('your language: ' + this.setLang);

    console.log('##########  END  ##########');
  }

  openHelpAsModal() {
    this.dialog.open(HelpModalComponent);
  }

}

// TODO export -> modal
@Component({
  selector: 'app-login-reminder-dialog',
  template: `
    <app-help></app-help>
    <!--<p>test</p>-->
  ` ,
  styleUrls: ['./help/help.component.scss']
})
export class HelpModalComponent {}
