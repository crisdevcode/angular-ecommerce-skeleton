import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {

  items: { label: string; link: string }[] = [
    {
      label: 'Products',
      link: '/products',
    },
    {
      label: 'Drawings',
      link: '/drawings',
    },
    {
      label: 'Sculpture',
      link: '/sculpture',
    },
    {
      label: 'Artists',
      link: '/artists',
    },
  ];

  public cartItemCount: number = 0;

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(()=> {
      this.cartItemCount = this.cartService.getCartItemCount();
    })
  }
}
