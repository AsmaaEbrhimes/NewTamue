import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs-products',
  templateUrl: './tabs-products.component.html',
  styleUrl: './tabs-products.component.css'
})
export class TabsProductsComponent {
  IdColor:any
  constructor(private router: Router) {}




  onTabClick(number: number, route: string) {
    this.SetColor(number); 
    this.router.navigate([route]);  
  }

  SetColor(number: number) {
    this.IdColor = number;
  }

}
