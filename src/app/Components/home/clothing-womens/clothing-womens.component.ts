import { Component } from '@angular/core';
import { HomeService } from '../../../core/Services/home.service';

@Component({
  selector: 'app-clothing-womens',
  templateUrl: './clothing-womens.component.html',
  styleUrl: './clothing-womens.component.css'
})
export class ClothingWomensComponent {
  FilterClothingWomens: any


  constructor(private HomeService: HomeService) {
    this.GetAllWomensClothing()
  }

  CheckColorProduct() {
    const CheakColorData = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    if (CheakColorData && CheakColorData.length > 0) {
      this.FilterClothingWomens.map((item: any) => {
        const existsInWishList = CheakColorData.some((wishlistItem: any) => wishlistItem._id === item._id);
        if (existsInWishList) {
          item.colorWishList = true;
        } else {
          item.colorWishList = false;
        }
      });
    }
  }






  GetAllWomensClothing() {
    this.HomeService.GetAllproduct('product/All').subscribe((res: any) => {
      this.FilterClothingWomens = res.filter((ele: any) => ele.category == 'clothing Womens')
      this.CheckColorProduct()
    });
  }


  AddtoCart(item: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartSecondProduct') || '[]');
    let ExsistItem = existingCart.some((ele: any) => ele._id == item._id)
    if (!ExsistItem) {
      existingCart.push(item)
      localStorage.setItem('cartSecondProduct', JSON.stringify(existingCart))
    }
  }

  AddWishList(item: any) {
    item.colorWishList = !item.colorWishList
    const existingWishList = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    let ExsistItem = existingWishList.some((ele: any) => ele._id == item._id)
    if (!ExsistItem && item.colorWishList) {
      existingWishList.push(item)
      localStorage.setItem('WishlistProducts', JSON.stringify(existingWishList))
    }
    else if (ExsistItem && !item.colorWishList) {
      let filterFavourite = existingWishList.filter((ele: any) => ele._id !== item._id)
      localStorage.setItem('WishlistProducts', JSON.stringify(filterFavourite))
    }

  }
}
