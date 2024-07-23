import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem.model';
import { Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../products/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  public cartItems: CartItem[] = [];
  public itemCount: number = 0;
  private subscription: Subscription | undefined;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      this.itemCount = this.cartService.getCartItemCount();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  increaseQuantity(product: Product): void {
    this.cartService.increaseQuantity(product);
  }

  decreaseQuantity(product: Product): void {
    this.cartService.decreaseQuantity(product);
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout'], {
      state: { cartItems: this.cartItems },
    });
  }
}
