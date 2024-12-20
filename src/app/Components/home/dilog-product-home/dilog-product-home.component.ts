import { Component } from '@angular/core';
import { GenralService } from '../../../core/Services/genral.service';
import { HomeService } from '../../../core/Services/home.service';
import { RefreshWatcherService } from '../../../core/Services/refresh-watcher.service';
import { EnumePage } from '../../../core/Enums/Enum-page';
import { timer } from 'rxjs';
@Component({
  selector: 'app-dilog-product-home',
  templateUrl: './dilog-product-home.component.html',
  styleUrl: './dilog-product-home.component.css'
})
export class DilogProductHomeComponent {
  constructor(private services: HomeService, private gs: GenralService, private refreshWatcher: RefreshWatcherService) {
    this.dataHome = this.services.AllDataHome()
  }
  visible2 = false;
  dataHome: any = []
  ShowSuccess: boolean = false
  findProduct: any
  mainImg: any
  currentIndex: number = 1
  cartmainarray: any[] = [];


  open(id: any) {
    let findData = this.dataHome.find((ele: any) => ele.id == id)
    this.mainImg = `assets/imges/${findData.img1} `
    this.findProduct = findData
    this.visible2 = true;
  }

  sliderImg(event: MouseEvent) {
    const target = event.target as HTMLImageElement;
    this.mainImg = target.src

  }
  updateMainImg() {
    const imgKey = `img${this.currentIndex}`;
    this.mainImg = this.findProduct[imgKey]
      ? `assets/imges/${this.findProduct[imgKey]}`
      : 'assets/imges/default.webp';
  }


  sliderprefbutton() {
    if (this.currentIndex < 3) {
      this.currentIndex++;
      this.updateMainImg();
    }
  }

  sliderNextbutton() {
    if (this.currentIndex > 1) {
      this.currentIndex--
      this.updateMainImg();

    }
  }

  AddProduct(id: any) {
    if (this.findProduct && typeof this.findProduct === 'object') {
      const existingCart = JSON.parse(localStorage.getItem('cartmainProduct') || '[]');
      const exists = existingCart.some((item: any) => item.id === id);
      if (!exists) {
        existingCart.push(this.findProduct);
        localStorage.setItem('cartmainProduct', JSON.stringify(existingCart));
        this.ShowSuccess = true
        setTimeout(() => {
          this.ShowSuccess = false
        }, 3000);
        this.refreshWatcher.refreshPage(EnumePage.DilogAdd);
        this.refreshWatcher.refreshPage(EnumePage.ToggelSidebar);
      } else {
        this.gs.$ShowTostr.next(true)
        this.gs.$TostrText.next('لقد تم اضافه المنتج من قبل')
        timer(2500).subscribe(() => {
          this.gs.$ShowTostr.next(false);
        });
      }
    }
  }


  SetQuinty(event: any) {
    this.findProduct.quinty = +event.target.value
  }













}


