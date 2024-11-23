import { Component } from '@angular/core';
import { HomeService } from '../../core/Services/home.service';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.css'
})
export class FilterProductComponent {
  ShowDropDown: boolean = false
  filteredProducts: any[] = [];
  showFilter: boolean = false
  constructor(private services: HomeService) {
    this.GetAllProduct()
  }


  showProductHover(text: any) {
    if (text == 'clothing Womens') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'clothing Womens')
        }
      })
    } else if (text == 'Acceroies Mopile') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'Acceroies Mopile')
        }
      })
    } else if (text == 'Beatuy') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'Beatuy')
        }
      })
    } else if (text == 'Kids') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'Kids')
        }
      })
    } else if (text == 'clothing children') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'clothing children')
        }
      })
    } else if (text == 'party-supplies') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'party-supplies')
        }
      })
    } else if (text == 'Fashion') {
      this.services.GetAllproduct('product/All').subscribe({
        next: (res: any) => {
          this.filteredProducts = res.filter((res: any) => res.category == 'Fashion')
        }
      })
    }
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


  SHOWFILTERTION() {
    this.showFilter = !this.showFilter
  }
}
