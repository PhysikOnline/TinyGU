import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');

  constructor() { }

  ngOnInit() {
  }


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'This can not be empty' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getPasswordErrorMessage() {
    let errorMessage: string;
    if (this.password.hasError('required') && this.email.hasError('required')) {
      errorMessage = 'This too xD';
    } else if (this.password.hasError('required')) {
      errorMessage = 'This can not be empty';
    } else {
      errorMessage = '';
    }

    return errorMessage;
  }
}
