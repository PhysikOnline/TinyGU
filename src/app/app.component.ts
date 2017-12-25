import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
// import {APP_BASE_HREF} from '@angular/common';
import {stringify} from 'querystring';
import {split} from 'ts-node';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  title = 'TinyGU';
  easteregg = false;
  userLang = '';
  setLang: string;


  navItems = [
    { name: 'About', route: '/about' },
    { name: 'Account', route: '/account' },
    { name: 'Help', route: '/help' },
  ];

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
    // location.hostname = location.hostname + '/en';
    // location.href = location.href + 'en';
    console.log('href: ' + location.href);
    // $scope.location = window.location;

    // console.log('stringify(APP_BASE_HREF): ' + stringify(APP_BASE_HREF));
    console.log('stringify(HTTP_INTERCEPTORS): ' + stringify(HTTP_INTERCEPTORS));

    switch (this.setLang) {
      case 'de':
        // location.href = stringify(APP_BASE_HREF);
        console.log('DE chosen');
        break;
      case 'en':
        // location.href = stringify(APP_BASE_HREF) + 'en';
        location.href = location.href.replace(location.host + '/', location.host + '/' + 'en' + '/');
        console.log('REPLACE --> ' + location.href.replace(location.host + '/', location.host + '/' + 'en' + '/'));
        console.log('location.href + \'en\': ' + location.href + 'en');
        console.log('EN chosen');
        break;
      default:
        console.log('---  default  ---');
    }

    console.log('href: ' + location.href);
    console.log('your language: ' + this.setLang);

    // console.log('stringify(APP_BASE_HREF): ' + stringify(APP_BASE_HREF));
    console.log('stringify(HTTP_INTERCEPTORS): ' + stringify(HTTP_INTERCEPTORS));

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
