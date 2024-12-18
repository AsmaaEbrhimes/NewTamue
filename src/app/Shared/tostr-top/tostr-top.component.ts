import { Component, OnDestroy } from '@angular/core';
import { GenralService } from '../../core/Services/genral.service';
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-tostr-top',
  templateUrl: './tostr-top.component.html',
  styleUrl: './tostr-top.component.css'
})
export class TostrTopComponent implements OnDestroy {
  Showtostr: any
  texttostr:any
  private subscription: Subscription | null = null
  constructor(private gs: GenralService) {
    this.CheckStatusTostr()
    this.GetMessageTosrt()
  }

  CheckStatusTostr() {
    this.subscription = this.gs.$ShowTostr.subscribe((res: any) => {
      this.Showtostr = res
    })
  }


GetMessageTosrt(){
  this.subscription = this.gs. $TostrText.subscribe((res: any) => {
    this.texttostr = res
  })
}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
