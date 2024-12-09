import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  DataShoping:any
  constructor() {
    this.GetAllDataProductsMain()
  }


  GetAllDataProductsMain() {
    const mainCart = localStorage.getItem('cartmainProduct');
    if(mainCart){
      this.DataShoping = JSON.parse(mainCart)
    }
  }


  DeleteProductFromLocalStorage(Id:any){
   let FilterShoppingProduct = this.DataShoping.filter((ele:any)=>ele._id == Id)
   this.DataShoping = FilterShoppingProduct
   localStorage.setItem('cartmainProduct',JSON.stringify(this.DataShoping));

  }
}
