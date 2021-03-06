import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Link } from '../models/link';
import { HttpResponseModalComponent } from '../modal/http-response-modal.component';
import { LoginReminderModalComponent } from '../modal/login-reminder-modal.component';

// some crazy page to generate the regex just with some samples!
// http://txt2re.com http://regex.inginf.units.it/
// my favorite regex generator
// https://regex101.com/

// based on this test i used Diego Perinis URL regex and modified it to ignore the protocol prefix
// https://gist.github.com/dperini/729294#file-regex-weburl-js-L60
// TODO use Diegos Script for the benefits of updates
// i modified the first two clamps and added a ? after the protocol prefix an // to accept urls like  uni-frankfurt.de
const URL_REGEX = /^(?:(?:https?|ftps?|mailto):)?(\/\/)?(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
// https://regex101.com/r/QTFb0t/3
const GOETHE_URL_REGEX = /^(?:.*\.|.*\/{2})?(?:uni\-frankfurt\.de|asta\-frankfurt\.de|goethe\-university\-frankfurt\.de|hebis\.de)(?:\/.*)?$/;
// const COMBINED_URL_REGEX = new RegExp(URL_REGEX.source + GOETHE_URL_REGEX.source);

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss']
})
export class ShortenerComponent implements OnInit {
  constructor(public dialog: MatDialog, private api: ApiService) { }

  easteregg = false;
  moreOptions = false;
  inputURL = '';
  shortURL = '';
  loggedInVar = false;

  urlFormControl = new FormControl('', [Validators.pattern(URL_REGEX), Validators.pattern(GOETHE_URL_REGEX)]);
  // urlFormControl = new FormControl('inputURL', [Validators.pattern(URL_REGEX), Validators.pattern(GOETHE_URL_REGEX)]);
  shortUrlFormControl = new FormControl('', Validators.minLength(2));

  ngOnInit() {
  }

  onShorten() {
    console.log('urlFormControl -->', !this.urlFormControl.hasError('pattern'), '###################');
    console.log('shortUrlFormControl -->', !this.shortUrlFormControl.hasError('minlength'), '###################');
    if (!this.urlFormControl.hasError('pattern') && !this.shortUrlFormControl.hasError('minlength')) {
      const link = new Link( this.inputURL, this.shortURL, null, null, null );
      let successMessage: string[]; // or any[] to process date?
      // TODO error handling
      // https://stackoverflow.com/questions/45066668/angular2-http-post-request-error
      // https://stackoverflow.com/questions/41998222/best-practice-for-handling-error-in-angular2
      // https://stackoverflow.com/questions/42104629/angular-2-checking-for-server-errors-from-subscribe
      // https://angular.io/guide/http#!#always-handle-errors
      // TODO is it safe to assume everything is ok and no errors occured when onNext is triggered?
      // https://stackoverflow.com/a/42104835/7927273
      // http://reactivex.io/documentation/operators/subscribe.html
      this.api.createLink( link )
          .subscribe(
            data => {
              console.log('onNext---->>>>>>>>>>>>>>>>>>>>');
              console.log(data);
              console.log(data.shortUrl);
              successMessage = [data.longUrl, data.shortUrl, (data.owner ? '1' : '0'), data.dateCreated];
              console.log('<<<<<<<<<<<<<<<<<<<<----onNext');
            },
            err => {
              console.log('ERROR---->>>>>>>>>>>>>>>>>>>>');
              console.error(err); // whole error; "err.error.error" -> actual error message; "err.message" -> generated error message
              console.error(err.error.error);
              // this.dialog.open(LoginReminderModalComponent);
              this.dialog.open(HttpResponseModalComponent, {data: {errorMessage: err.error.error}});
              console.log('<<<<<<<<<<<<<<<<<<<<----ERROR');
            },
            () => {
              console.log('complete---->>>>>>>>>>>>>>>>>>>>');
              console.log(successMessage);
              // pass data to modal
              // https://github.com/angular/material2/issues/2031
              // https://github.com/angular/material2/blob/master/src/lib/dialog/dialog.ts#L44
              // https://material.angular.io/components/dialog/overview
              this.dialog.open(HttpResponseModalComponent, {data: {completeMessage: successMessage}});
              console.log('<<<<<<<<<<<<<<<<<<<<----complete');
            }
           );
      // if (!this.loggedInVar) this.dialog.open( LoginReminderModalComponent );
    } else {
      // TODO input or inputError blinking, vibrating, animation....
    }
  }

  onTest() {
    // this.api.deleteLink(24).subscribe(console.log);
    // this.api.getOneLink(1).subscribe(console.log);
    // this.api.updateLink(new Link( this.inputURL, this.shortURL, null, 1, null ), 1).subscribe(console.log);
  }

}

// // TODO export to modal folder
// @Component({
//   selector: 'app-login-reminder-dialog',
//   template: `
//   <h2 mat-dialog-title>Create an account</h2>
//   <mat-dialog-content>Do you want to create an account, so you can edit, delete and change the link you create?</mat-dialog-content>
//   <mat-dialog-actions>
//     <button mat-button mat-dialog-close>No</button>
//     <!-- Can optionally provide a result for the closing dialog. -->
//     <button mat-button [mat-dialog-close]="true">Yes</button>
//   </mat-dialog-actions>`,
//   styleUrls: ['./shortener.component.scss']
// })
// export class LoginReminderDialogComponent {
// }
