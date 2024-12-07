import { TranslatingModule } from '../../Shared/translating/translating.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../Shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DtailsProductComponent } from './dtails-product/dtails-product.component';
import { SupTotalComponent } from './sup-total/sup-total.component';
import { DilogProductHomeComponent } from './dilog-product-home/dilog-product-home.component';
import { DetailsRighrProductComponent } from './details-righr-product/details-righr-product.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FashionComponent } from './fashion/fashion.component';
import { ClothingChildrenComponent } from './clothing-children/clothing-children.component';
import { TabsProductsComponent } from './tabs-products/tabs-products.component';
import { ChildrenKidsComponent } from './children-kids/children-kids.component';
import { BeautyCategoryComponent } from './beauty-category/beauty-category.component';
import { AcceioresMobileComponent } from './acceiores-mobile/acceiores-mobile.component';
import { ClothingWomensComponent } from './clothing-womens/clothing-womens.component';
import { BagGirlComponent } from './bag-girl/bag-girl.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RightShoppingCartComponent } from './right-shopping-cart/right-shopping-cart.component';
import { WisListProductComponent } from './wis-list-product/wis-list-product.component';

@NgModule({
  declarations: [
    HomeComponent,
    DtailsProductComponent,
    SupTotalComponent,
    DilogProductHomeComponent,
    DetailsRighrProductComponent,
    HeaderHomeComponent,
    FashionComponent,
    ClothingChildrenComponent,
    TabsProductsComponent,
    ChildrenKidsComponent,
    BeautyCategoryComponent,
    AcceioresMobileComponent,
    ClothingWomensComponent,
    BagGirlComponent,
    ShoppingCartComponent,
    RightShoppingCartComponent,
    WisListProductComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DialogModule,
    ButtonModule, 
    InputTextModule,
    AnimateOnScrollModule,
    GalleriaModule,
    CheckboxModule,
    RadioButtonModule,
    TranslatingModule,
  ]
})
export class HomeModule { }
