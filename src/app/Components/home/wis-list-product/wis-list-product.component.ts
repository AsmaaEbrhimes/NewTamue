import { Component } from '@angular/core';
import { setAlternateWeakRefImpl } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-wis-list-product',
  templateUrl: './wis-list-product.component.html',
  styleUrl: './wis-list-product.component.css'
})
export class WisListProductComponent {
  DataWisList: any
  constructor() {
    this.GetProductWishList()
  }

  GetProductWishList() {
    let ProductWishList = localStorage.getItem('WishlistProducts')
    if (ProductWishList) {
      this.DataWisList = JSON.parse(ProductWishList)
    }
  }

  AddtoCart(Item: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartSecondProduct') || '[]');
    let ExsistProduct = existingCart.some((ele: any) => ele._id == Item._id)
    if (!ExsistProduct) {
      existingCart.push(Item)
      localStorage.setItem('cartSecondProduct', JSON.stringify(existingCart))
    } else {
      return
    }
  }

  DeleteProductFromWishList(Id: any) {
    let FilterWishList = this.DataWisList.filter((ele: any) => ele._id !== Id)
    this.DataWisList = FilterWishList
    localStorage.setItem('WishlistProducts', JSON.stringify(FilterWishList))
  }
}
