import { NgModule } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    // == PrimeNG Modules here == //
    ButtonModule,
    CarouselModule,
    BadgeModule,
    CardModule,
    TableModule
  ]
})
export class PrimeNgModule { }
