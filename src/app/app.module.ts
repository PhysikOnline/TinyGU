import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShortenerComponent } from './shortener/shortener.component';
import {ShortenerService} from './shortener.service';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import { TranslatePipe } from './translate/translate.pipe';
import {TranslationService} from "./translate/translation.service";

@NgModule({
  declarations: [
    AppComponent,
    ShortenerComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShortenerService, TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
