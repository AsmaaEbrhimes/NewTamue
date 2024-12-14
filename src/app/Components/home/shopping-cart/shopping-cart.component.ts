import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  DataShoping: any
  // secondProduct: any
  // ArrayProduct: any = []
  constructor() {
    this.GetAllDataProductsMain()
  }


  GetAllDataProductsMain() {
    const mainCart = localStorage.getItem('cartmainProduct');
    if (mainCart) {
      const parsedData = JSON.parse(mainCart);
      if (Array.isArray(parsedData)) {
        this.DataShoping = parsedData;
      } else {
        console.error('Data from localStorage is not an array:', parsedData);
      }
    }
  
  }


  DeleteProductFromLocalStorage(Id: any) {
    let FilterShoppingProduct = this.DataShoping.filter((ele: any) => ele.id !== Id);
    this.DataShoping = FilterShoppingProduct;
    localStorage.setItem('cartmainProduct', JSON.stringify(this.DataShoping));  
  }


  UpdateProductonShoppimg(event:any , product:any){
    const mainCart = localStorage.getItem('cartmainProduct');
    if (mainCart) {
      const parsedData = JSON.parse(mainCart);
      let FindProduct = parsedData.find((ele:any)=>ele.id == product.id)
      FindProduct.quinty = +event.target.value
      localStorage.setItem('cartmainProduct',JSON.stringify(parsedData))
    }
  }
}
