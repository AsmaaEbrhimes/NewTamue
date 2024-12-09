import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-righr-product',
  templateUrl: './details-righr-product.component.html',
  styleUrl: './details-righr-product.component.css'
})
export class DetailsRighrProductComponent {
  @Input() objectDta: any; 
}
