import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
}
