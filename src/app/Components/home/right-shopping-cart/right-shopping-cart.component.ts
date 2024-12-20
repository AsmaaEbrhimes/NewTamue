import { Component, OnInit, ElementRef, ViewChild, viewChildren } from '@angular/core';
@Component({
  selector: 'app-right-shopping-cart',
  templateUrl: './right-shopping-cart.component.html',
  styleUrl: './right-shopping-cart.component.css'
})
export class RightShoppingCartComponent implements OnInit {
  LengthAllProduct: any
  AllProduct: any
  amount = 0
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef
  constructor() {
    this.GetLengthProceAllProduct()
  }

  ngOnInit() {
    this.IntegrationPayPalPayment()
  }

  GetLengthProceAllProduct() {
    const mainCart = localStorage.getItem('cartmainProduct');
    if (mainCart) {
      const parsedData = JSON.parse(mainCart);
      this.AllProduct = parsedData
      this.LengthAllProduct = parsedData.length
    }
  }



  IntegrationPayPalPayment() {
    this.amount = this.LengthAllProduct
    window.paypal.Buttons(
      {
        createOrder: (data: any, action: any) => {
          return action.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code:'USD'
                }
              }
            ]
          })
        },
        onApprove:(data:any , action:any) =>{
          return action.order.capture().then((details:any)=>{
            if(details.status == 'COMPLETED'){
              console.log(details)
            }
          })
        },
        onError: (error :any) =>{
          console.log(error)
        }
      }
    ).render(this.paymentRef.nativeElement)
  }

  calculateTotalSalary() {
    const TotalSalery = this.AllProduct.reduce((acc: any, product: any) => {
      const salary = parseFloat(product.salary.replace('£', ''));
      return acc + salary;
    }, 0);
    return TotalSalery;
  }
}
