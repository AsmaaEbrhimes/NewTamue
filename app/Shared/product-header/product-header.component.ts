import { Component } from '@angular/core';
import { HomeService } from '../../core/Services/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.css'
})
export class ProductHeaderComponent {
  visible: boolean = false
  contentsearchtwo: boolean = true
  filtervalue: any = ''
  contentsearchone: boolean = false
  filteredProducts: any[] = [];
  SearchValue: any


  constructor(private services: HomeService, private Route: Router) {
    this.GetAllProduct()
  }

  showDialog() {
    this.visible = true;
  }

  filterSearshProduct(e: any) {
    this.SearchValue = e.target.value;
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
      }
    });
  }



  HandelRouteSepasificSearch() {
    if (this.SearchValue == 'Fashion') {
      this.Route.navigate(['/home/FashionCategory'])
    } else if (this.SearchValue == 'party-supplies') {
      this.Route.navigate(['/home/ChildrenKids'])
    } else if (this.SearchValue == 'clothing children') {
      this.Route.navigate(['/home/ChildrenCategory'])
    } else if (this.SearchValue == 'Kids') {
      this.Route.navigate(['/home/bagGirl'])
    } else if (this.SearchValue == 'Beatuy') {
      this.Route.navigate(['/home/Beauty'])
    } else if (this.SearchValue == 'Acceroies Mopile') {
      this.Route.navigate(['/home/AcceioresMobile'])
    } else if (this.SearchValue == 'clothing Womens') {
      this.Route.navigate(['/home/ClotingWomens'])
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

  RouteProducts(item: any) {
    if (item.category == 'Fashion') {
      this.Route.navigate(['/home/FashionCategory'])
    } else if (item.category == 'party-supplies') {
      this.Route.navigate(['/home/ChildrenKids'])
    } else if (item.category == 'clothing children') {
      this.Route.navigate(['/home/ChildrenCategory'])
    } else if (item.category == 'Kids') {
      this.Route.navigate(['/home/bagGirl'])
    } else if (item.category == 'Beatuy') {
      this.Route.navigate(['/home/Beauty'])
    } else if (item.category == 'Acceroies Mopile') {
      this.Route.navigate(['/home/AcceioresMobile'])
    } else if (item.category == 'clothing Womens') {
      this.Route.navigate(['/home/ClotingWomens'])
    }
  }
}
