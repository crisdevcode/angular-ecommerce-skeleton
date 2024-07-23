import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cartItem.model';
import { Product } from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cart.asObservable();

  constructor() { }

  addToCart(product: Product, quantity: number = 1) {

    const currentCart = this.cart.value;
    const itemIndex = currentCart.findIndex(item => item.product.id === product.id);

    if (itemIndex !== -1) {
      // If the product is already in the cart, increase the quantity
      currentCart[itemIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it as a new item
      const newItem: CartItem = {
        id: product.id,
        product,
        quantity,
      }

      currentCart.push(newItem);
    }

    this.cart.next([...currentCart]);
  }

  removeFromCart(product: Product) {
    const currentCart = this.cart.value.filter(item => item.product.id !== product.id);
    this.cart.next(currentCart);
  }


  increaseQuantity(product: Product) {
    const currentCart = this.cart.value;
    const itemIndex = currentCart.findIndex(item => item.product.id === product.id);

    if (itemIndex !== -1) {
      currentCart[itemIndex].quantity += 1;
      this.cart.next([...currentCart]);
    }
  }

  decreaseQuantity(product: Product) {
    const currentCart = this.cart.value;
    const itemIndex = currentCart.findIndex(item => item.product.id === product.id);

    if (itemIndex !== -1 && currentCart[itemIndex].quantity > 1) {
      currentCart[itemIndex].quantity -= 1;
      this.cart.next([...currentCart]);
    } else if (itemIndex !== -1 && currentCart[itemIndex].quantity === 1) {
      this.removeFromCart(product);
    }
  }

  getCartItemCount(): number {
    return this.cart.value.reduce((count, item) => count + item.quantity, 0);
  }

  clearCart() {
    this.cart.next([]);
  }
}
