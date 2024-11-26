import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingChildrenComponent } from './clothing-children/clothing-children.component';
import { DtailsProductComponent } from './dtails-product/dtails-product.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { SupTotalComponent } from './sup-total/sup-total.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  { path: 'detailsproducr/:id', component: DtailsProductComponent },
  { path: 'suptotal', component: SupTotalComponent },
  { path: 'FashionCategory', component: FashionComponent },
  { path: 'ChildrenCategory', component: ClothingChildrenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
