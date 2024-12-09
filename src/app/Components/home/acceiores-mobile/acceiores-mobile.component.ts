import { HomeService } from './../../../core/Services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acceiores-mobile',
  templateUrl: './acceiores-mobile.component.html',
  styleUrl: './acceiores-mobile.component.css'
})
export class AcceioresMobileComponent {
  AcceiresMobile: any
  constructor(private homeservices: HomeService) {
    this.GetAllProductsmopile()
  }

  CheckColorWishlist() {
    const CheakColorData = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    if (CheakColorData && CheakColorData.length > 0) {
      this.AcceiresMobile.map((item: any) => {  
        const existsInWishList = CheakColorData.some((wishlistItem: any) => wishlistItem._id === item._id);
        if (existsInWishList) {
          item.colorWishList = true;
        } else {
          item.colorWishList = false;
        }
      });
    }
  }
  


  GetAllProductsmopile() {
    this.homeservices.GetAllproduct('product/All').subscribe((res: any) => {
      this.AcceiresMobile = res
      this.AcceiresMobile = res.filter((ele: any) => ele.category === "Acceroies Mopile");
      this.CheckColorWishlist()
    });
  }



  AddtoCart(item: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartSecondProduct') || '[]');
    let ExsistItem = existingCart.some((ele: any) => ele._id == item._id)
    if (!ExsistItem) {
      existingCart.push(item)
      localStorage.setItem('cartSecondProduct',JSON.stringify(existingCart))
    }
  }

  AddWishList(item: any) {
    item.colorWishList = !item.colorWishList;
    const existingWishList = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    const exists = existingWishList.some((wishlistItem: any) => wishlistItem._id === item._id);
    if (!exists && item.colorWishList) {
      existingWishList.push(item);
      localStorage.setItem('WishlistProducts', JSON.stringify(existingWishList));
    }
    else if (exists && !item.colorWishList) {
      const updatedWishList = existingWishList.filter((wishlistItem: any) => wishlistItem._id !== item._id);
      localStorage.setItem('WishlistProducts', JSON.stringify(updatedWishList));
    }
  }
}
