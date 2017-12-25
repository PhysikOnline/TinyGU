import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent, HelpModalComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { HelpComponent } from './help/help.component';
import { routing } from './app.routing';
import { ShortenerComponent} from './shortener/shortener.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpResponseModalComponent } from './modal/http-response-modal.component';
import { LoginReminderModalComponent } from './modal/login-reminder-modal.component';
// import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccountComponent,
    HelpComponent,
    ShortenerComponent,
    HttpResponseModalComponent,
    HelpModalComponent,
    LoginReminderModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MatDialogModule,
    HttpClientModule,
  ],
  entryComponents: [
    HttpResponseModalComponent,
    HelpModalComponent,
    LoginReminderModalComponent,
  ],
  providers: [
    ApiService,
    // {
    //   provide: APP_BASE_HREF, // TODO remove when i18n doesnt need two apps anymore (used for changeLang() in app.components.ts)
    //   // useFactory: getBaseLocation
    //   useValue: '/' + (window.location.pathname.split('/')[1] || '')
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
