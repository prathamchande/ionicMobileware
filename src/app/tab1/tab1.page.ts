import { Component } from '@angular/core';
import { LanguageService } from '../service/common/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  themeToggle = false;
  langArr: any = [];
  defaultLang: any;
  constructor(private languageService: LanguageService,private routeTo:Router) {}
  ngOnInit() {
    debugger
    this.langArr = this.languageService.getLanguage();
    this.defaultLang = this.languageService.selected;
  }

  // Check/uncheck the toggle and update the theme based on isDark

  toggleChange(ev: any) {
    this.toggleDarkTheme(ev.detail.checked);
  }

  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  selectLang(event: any) {
    this.languageService.setLanguage(event.target.value);
  }

  login(){
    debugger
    this.routeTo.navigate(['/login']);
  }
}
