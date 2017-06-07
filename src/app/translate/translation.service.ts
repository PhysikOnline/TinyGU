import {Injectable} from '@angular/core';
import {translations} from "./translations";

@Injectable()
export class TranslationService {
  private language = 'en';
  private translations;

  constructor() {
    this.translations = translations;
  }

  get currentLang() {
    return this.language;
  }

  set currentLang(lang: string) {
    this.currentLang = lang;
  }

  translate(string: string): string {
    if (this.language === 'en') return string;
    return this.translations[this.language][string];
  }
}
