import { Component } from '@angular/core';
import { Product } from '../../../products/models/product.model';

@Component({
  selector: 'app-featured-paintings',
  templateUrl: './featured-paintings.component.html',
  styleUrl: './featured-paintings.component.scss',
})
export class FeaturedPaintingsComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'Abstract Dreams',
      description: 'A vibrant abstract painting full of energy and color.',
      price: 450,
      artist: 'Sophia Mitchell',
      category: 'Painting',
      imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: true,
    },
    {
      id: '2',
      name: 'Modern Serenity',
      description:
        'A sleek modern sculpture that brings peace and calm to any space.',
      price: 1200,
      artist: 'Liam Johnson',
      category: 'Sculpture',
      imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: false,
    },
    {
      id: '3',
      name: 'Classic Portrait',
      description:
        'A timeless portrait capturing the elegance and grace of its subject.',
      price: 850,
      artist: 'Emily Davis',
      category: 'Painting',
      imageUrl: 'https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: true,
    },
  ];
}
