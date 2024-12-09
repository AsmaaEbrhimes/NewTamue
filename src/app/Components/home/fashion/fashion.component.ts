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
  MainIconWishList: boolean = true
  Id: any
  IdWishList: any
  constructor(private servicesHome: HomeService) {
    this.GetCategoryFashion()
    this.CheckColorWishlist()
  }




  CheckColorWishlist() {
    const CheakColorData = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    if (CheakColorData && CheakColorData.length > 0) {
      this.filterFashionCategory.map(item => {
        const existsInWishList = CheakColorData.some((wishlistItem: any) => wishlistItem._id === item._id);
        if (existsInWishList) {
          item.colorWishList = true;
        } else {
          item.colorWishList = false;
        }
      });
    }
  }


  GetCategoryFashion() {
    this.servicesHome.GetAllproduct('product/All').subscribe((res: any) => {
      this.filterFashionCategory = res.filter((ele: any) => ele.category === 'Fashion');
      this.CheckColorWishlist();
    });
  }


  AddWishList(item: any) {
    item.colorWishList = !item.colorWishList;
    const existingWishList = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    const exists = existingWishList.some((wishlistItem: any) => wishlistItem._id === item._id);
    if (!exists && item.colorWishList) {
      existingWishList.push(item);
      item.colorWishList = true
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
    if (!ExsistItem) {
      existingCart.push(item)
      localStorage.setItem('cartSecondProduct', JSON.stringify(existingCart));
    }
  }


}
