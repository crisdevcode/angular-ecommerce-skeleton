import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../../cart/models/cartItem.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  public cartItems: CartItem[] = [];
  public itemCount: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cart.value;
    this.itemCount = this.cartService.getCartItemCount();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

}
