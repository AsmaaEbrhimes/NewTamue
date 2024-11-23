import { Component } from '@angular/core';
import { HomeService } from '../../core/Services/home.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.css'
})
export class ProductHeaderComponent {
  visible:boolean=false
  contentsearchtwo: boolean = true
  filtervalue: any = ''
  contentsearchone: boolean = false
  filteredProducts: any[] = [];



  constructor(private services: HomeService) {
    this.GetAllProduct()
  }

  showDialog() {
    this.visible = true;
  }

  filterSearshProduct(e: any) {
    const value = e.target.value;
    this.contentsearchone = true;
    this.contentsearchtwo = false;
   

    if (value === '') {
      this.contentsearchone = false;
      this.contentsearchtwo = true;
      this.filtervalue = [];
      return;
    }
    this.services.GetAllproduct('product/All').subscribe({
      next: (res: any) => {
        this.filtervalue = res.filter((res: any) => res.category === value);
        console.log(this.filtervalue);
      },
      error: (err) => {
        console.error("Error fetching products:", err);
      }
    });
  }

  GetAllProduct() {
    this.services.GetAllproduct('product/All').subscribe({
      next: (res: any) => {
        this.filteredProducts.push(
          res.find((item: any) => item.category === 'Fashion'),
          res.find((item: any) => item.category === 'school-bag'),
          res.find((item: any) => item.category === 'party-supplies'),
          res.find((item: any) => item.category === 'clothing children'),
          res.find((item: any) => item.category === 'Kids'),
          res.find((item: any) => item.category === 'Beatuy'),
          res.find((item: any) => item.category === 'clothing Womens'),
          res.find((item: any) => item.category === 'Acceroies Mopile')
        );
      }
    })
  }

}
