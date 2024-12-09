import { HomeService } from './../../../core/Services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-children-kids',
  templateUrl: './children-kids.component.html',
  styleUrl: './children-kids.component.css'
})
export class ChildrenKidsComponent {
  filterKidsCategory: any
  constructor(private HomeService: HomeService) {
    this.GetCategoryKids()
  }



  CheckColorProduct() {
    const CheakColorData = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    if (CheakColorData && CheakColorData.length > 0) {
      this.filterKidsCategory.map((item: any) => {
        const existsInWishList = CheakColorData.some((wishlistItem: any) => wishlistItem._id === item._id);
        if (existsInWishList) {
          item.colorWishList = true;
        } else {
          item.colorWishList = false;
        }
      });
    }
  }



  GetCategoryKids() {
    this.HomeService.GetAllproduct('product/All').subscribe((res: any) => {
      this.filterKidsCategory = res.filter((ele: any) => ele.category == 'party-supplies')
      this.CheckColorProduct()
    });
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




  AddtoCart(item: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartSecondProduct') || '[]');
    let ExsistItem = existingCart.some((ele: any) => ele._id == item._id)
    if (!ExsistItem) {
      existingCart.push(item)
      localStorage.setItem('cartSecondProduct', JSON.stringify(existingCart))
    }
  }

}
