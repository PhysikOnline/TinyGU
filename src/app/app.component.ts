import {AfterViewChecked, Component} from '@angular/core';
declare const componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  loggedIn = false;

  ngAfterViewChecked() {
    componentHandler.upgradeAllRegistered();
  }
}
