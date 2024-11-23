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
    item.colorWishList = !item.colorWishList
    if (this.filterFashionCategory && typeof this.filterFashionCategory === 'object') {
      const existingWishList = JSON.parse(localStorage.getItem('WishlistProducts') || '[]');
      const exists = existingWishList.some((item: any) => item._id === item._id);
      if (!exists) {
        existingWishList.push(this.filterFashionCategory);
        localStorage.setItem('cartmainProduct', JSON.stringify(existingWishList));
      }

    }
  }
}
