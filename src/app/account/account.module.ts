import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { AccountRoutingModule } from './account-routing.module';
import {AccountComponent} from './user-account/account.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
  ],
  declarations: [
    AccountComponent,
  ],
  exports: [
    AccountComponent,
  ]
})
export class AccountModule { }
