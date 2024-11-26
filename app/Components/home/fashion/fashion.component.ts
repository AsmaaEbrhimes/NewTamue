import { Component } from '@angular/core';
import { HomeService } from '../../../core/Services/home.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  filterFashionCategory: any[] = []
  colorWishList: boolean = false
  Id: any
  constructor(private servicesHome: HomeService) {
    this.GetCategoryFashion()
  }

  GetCategoryFashion() {
    this.servicesHome.GetAllproduct('product/All').subscribe((res: any) => {
      this.filterFashionCategory = res.filter((ele: any) => ele.category === 'Fashion');
    });
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

  AddtoCart(item: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartSecondProduct') || '[]');
    let ExsistItem = existingCart.some((ele: any) => ele._id == item._id)
    if(!ExsistItem){
      existingCart.push(item)
      localStorage.setItem('cartSecondProduct', JSON.stringify(existingCart));
    }
  }


}
