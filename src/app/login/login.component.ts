import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');
  activePane = 'left';

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

  changeActivePane() {
    if (this.activePane === 'left') {
      this.activePane = 'right';
    } else {
      this.activePane = 'left';
    }
  }
}
