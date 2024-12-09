import { HomeService } from './../../../core/Services/home.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clothing-children',
  templateUrl: './clothing-children.component.html',
  styleUrl: './clothing-children.component.css'
})
export class ClothingChildrenComponent {
  constructor(private servicesHome: HomeService) {
    this.GetCategoryFashion()
    this.CheckColorWishlist()
  }
  filterClotihingChildrenCategory: any


  CheckColorWishlist() {
    const CheakColorData = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
    if (this.filterClotihingChildrenCategory&&CheakColorData && CheakColorData.length > 0) {
      this.filterClotihingChildrenCategory.map((item:any) => {
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
      this.filterClotihingChildrenCategory = res.filter((ele: any) => ele.category === 'clothing children');
      this.CheckColorWishlist()
    });
  }


  AddtoCart(item: any) {
    let CartclothingChildren = JSON.parse(localStorage.getItem('cartSecondProduct') || '[]')
    let ExsistClothingChildern = CartclothingChildren.some((ele: any) => ele._id == item._id)
    if (!ExsistClothingChildern) {
      CartclothingChildren.push(item)
      localStorage.setItem('cartSecondProduct', JSON.stringify(CartclothingChildren))
    }
  }

  AddWishList(item: any) {
    item.colorWishList = !item.colorWishList
    let FavouriteclothingChildren = JSON.parse(localStorage.getItem('WishlistProducts') || '[]')
    let ExsistClothingChildernFavourite = FavouriteclothingChildren.some((ele: any) => ele._id == item._id)
    if (!ExsistClothingChildernFavourite && item.colorWishList == true) {
      FavouriteclothingChildren.push(item)
      localStorage.setItem('WishlistProducts', JSON.stringify(FavouriteclothingChildren))
    }
    else if (ExsistClothingChildernFavourite && item.colorWishList == false) {
      let filterFavouriteProduct = FavouriteclothingChildren.filter((ele: any) => ele._id !== item._id)
      localStorage.setItem('WishlistProducts', JSON.stringify(filterFavouriteProduct))
    }
  }



  
}
