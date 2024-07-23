import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    PrimeNgModule
  ]
})
export class CartModule { }
