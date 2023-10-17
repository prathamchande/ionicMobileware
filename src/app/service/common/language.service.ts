import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

const LNG_KEY = 'SELECTED_LANGUAGE';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private translate: TranslateService, private storage: Storage) {}
  selected = '';
  setInitialAppLang() {
    this.storage.create();
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language!);

    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguage() {
    return [
      { text: 'English', value: 'en' },
      { text: 'Hindi', value: 'hi' },
      { text: 'French', value: 'fr' },
    ];
  }
  setLanguage(lng: string) {
    this.translate.use(lng);

    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}
