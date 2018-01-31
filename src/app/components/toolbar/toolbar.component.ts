import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';
import { APP_BASE_HREF } from '@angular/common';
import { MatDialog } from '@angular/material';
import { HelpModalComponent } from '../../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() sideNavOpen = new EventEmitter();

  userLang = '';
  setLang: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onSideNavOpen(type?: string) {
    this.sideNavOpen.emit(type);
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
        console.log('search(/^/acc/i): ' + location.pathname.search(/^\/acc/i));
        console.log('match(/^/acc/i): ' + location.pathname.match(/^\/acc/i));
        console.log(
          "startsWith('/acc'): " + location.pathname.startsWith('/acc')
        );
        console.log(
          "startsWith('/en'): " + location.pathname.startsWith('/en')
        );
        console.log(
          'search(/^/en//i): ' + location.pathname.search(/^\/en\//i)
        );
        console.log('substr: ' + location.pathname.substr(3));
        console.log('cpmlete string: ' + location.pathname);
        break;
      case 'en':
        if (!location.pathname.startsWith('/TinyGU/en/')) {
          location.href = location.href.replace(
            location.host + '/TinyGU',
            location.host + '/TinyGU/en'
          );
        } else {
          console.log('EN already chosen');
        }
        console.log(
          'REPLACE --> ' +
            location.href.replace(
              location.host + '/',
              location.host + '/' + 'en' + '/'
            )
        );
        console.log("location.href + 'en': " + location.href + 'en');
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
