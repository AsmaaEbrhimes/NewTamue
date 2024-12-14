import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-shopping-cart',
  templateUrl: './right-shopping-cart.component.html',
  styleUrl: './right-shopping-cart.component.css'
})
export class RightShoppingCartComponent {
  LengthAllProduct: any
  AllProduct:any
  constructor() {
    this.GetLengthProceAllProduct()
  }

  GetLengthProceAllProduct() {
    const mainCart = localStorage.getItem('cartmainProduct');
    if (mainCart) {
      const parsedData = JSON.parse(mainCart);
      this.AllProduct = parsedData
      this.LengthAllProduct = parsedData.length
    }
  }

  calculateTotalSalary() {
    const TotalSalery = this.AllProduct.reduce((acc: any, product: any) => {
      const salary = parseFloat(product.salary.replace('£', ''));
      return acc + salary;
    }, 0);
    return TotalSalery;
  }
}
