import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem.model';
import { Product } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input()
  public cartItems: CartItem[] = [];

  @Output()
  public increaseQuantity = new EventEmitter<Product>();

  @Output()
  public decreaseQuantity = new EventEmitter<Product>();

  @Output()
  public removeItem = new EventEmitter<Product>();

  onIncreaseQuantity(product: Product) {
    this.increaseQuantity.emit(product);
  }

  onDecreaseQuantity(product: Product) {
    this.decreaseQuantity.emit(product);
  }

  onRemoveItem(product: Product) {
    this.removeItem.emit(product);
  }

}
