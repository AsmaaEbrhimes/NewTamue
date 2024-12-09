import { Component } from '@angular/core';

@Component({
  selector: 'app-supscrption',
  templateUrl: './supscrption.component.html',
  styleUrl: './supscrption.component.css'
})
export class SupscrptionComponent {
  visibleDilog: boolean = false;

  showDialogMessage(){
this.visibleDilog = true
  }
}
