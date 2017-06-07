import {Routes} from "@angular/router";
import {ShortenerComponent} from "./shortener/shortener.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: ShortenerComponent}
];
