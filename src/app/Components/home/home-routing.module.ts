import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceioresMobileComponent } from './acceiores-mobile/acceiores-mobile.component';
import { BagGirlComponent } from './bag-girl/bag-girl.component';
import { BeautyCategoryComponent } from './beauty-category/beauty-category.component';
import { ChildrenKidsComponent } from './children-kids/children-kids.component';
import { ClothingChildrenComponent } from './clothing-children/clothing-children.component';
import { ClothingWomensComponent } from './clothing-womens/clothing-womens.component';
import { DtailsProductComponent } from './dtails-product/dtails-product.component';
import { FashionComponent } from './fashion/fashion.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SupTotalComponent } from './sup-total/sup-total.component';
import { WisListProductComponent } from './wis-list-product/wis-list-product.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  { path: 'detailsproducr/:id', component: DtailsProductComponent },
  { path: 'suptotal', component: SupTotalComponent },
  { path: 'FashionCategory', component: FashionComponent },
  { path: 'ChildrenCategory', component: ClothingChildrenComponent },
  { path: 'ChildrenKids', component: ChildrenKidsComponent },
  { path: 'Beauty', component: BeautyCategoryComponent },
  { path: 'AcceioresMobile', component: AcceioresMobileComponent },
  { path: 'ClotingWomens', component: ClothingWomensComponent },
  { path: 'bagGirl', component: BagGirlComponent },
  { path: 'ShoppingCart', component: ShoppingCartComponent },
  { path: 'WishList', component: WisListProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
