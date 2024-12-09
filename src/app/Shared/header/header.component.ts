import { TranslateService } from "@ngx-translate/core";
import { Component } from '@angular/core';
import { HomeService } from "../../core/Services/home.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lang: any = 'en'
  constructor(private translate: TranslateService, private services: HomeService) {
    this.lang = this.translate.currentLang
  }

  sidebarVisible: boolean = false;
  visible2: boolean = false;
  position: any = { top: '10%', left: '20%' };
  sidebarVisible1: boolean = false;
  sidebarVisible2: boolean = false;
  sidebarVisible3: boolean = false;
  sidebarVisible4: boolean = false;
  // ShowDropDown: boolean = false
  sidebarVisibleTwo: boolean = false;






  ChangLanguage() {
    if (this.lang == 'en') {
      localStorage.setItem('languages', 'ar')
    } else {
      localStorage.setItem('languages', 'en')
    }
    window.location.reload()
  }





  // ShowDropDownMenue() {
  //   this.ShowDropDown = !this.ShowDropDown
  // }

  ShowDilog(){
    this.visible2 = true
  }
}

