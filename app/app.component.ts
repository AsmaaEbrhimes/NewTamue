import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tasks';
  lang: any
  constructor(private translate: TranslateService) {
    if (typeof window !== 'undefined' && 'localStorage' in window) {
      if (window.localStorage.getItem('languages')) {
        this.lang = window.localStorage.getItem('languages');
        this.translate.use(this.lang);
      } else {
        this.translate.use(this.translate.defaultLang);
      }
    } else {
      this.translate.use(this.translate.defaultLang);
    }
  }

  ngOnInit(){
    // if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      Aos.init();
      window.addEventListener('load',Aos.refresh)
    // }
    }
   
}

