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

@NgModule({
  declarations: [
    HomeComponent,
    DtailsProductComponent,
    SupTotalComponent,
    DilogProductHomeComponent,
    DetailsRighrProductComponent,
    HeaderHomeComponent,
    FashionComponent,
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

  ],
  exports:[
    SupTotalComponent,
  ]
})
export class HomeModule { }
