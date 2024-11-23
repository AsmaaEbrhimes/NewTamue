import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenralService } from '../../../core/Services/genral.service';
import { RefreshWatcherService } from '../../../core/Services/refresh-watcher.service';
import { EnumePage } from '../../../core/Enums/Enum-page';

@Component({
  selector: 'app-sup-total',
  templateUrl: './sup-total.component.html',
  styleUrl: './sup-total.component.css'
})
export class SupTotalComponent {
  cartData: any[] = [];
  $subscription: Subscription | undefined;
  findProduct: any;
  showSupTotal: boolean = false;
  constructor(private gs: GenralService, private refreshWatcher: RefreshWatcherService) {
    this.GetMainDataFromLocalStorage()
    this.RefeshWatcher()
  }

  ngOnDestroy(): void {
    if (this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }
  GetMainDataFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const mainCart = localStorage.getItem('cartmainProduct');
      if (mainCart) {
        this.cartData = JSON.parse(mainCart);
        this.showSupTotal = this.cartData.length > 0;
      }
    }
  }

  RefeshWatcher() {
    this.$subscription = this.refreshWatcher.refreshObservable.subscribe({
      next: (page) => {
        if (page == EnumePage.DilogAdd || page == EnumePage.ToggelSidebar) {
          this.GetMainDataFromLocalStorage()
        }
      }
    })
  }
}




