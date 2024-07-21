import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  exports: [
    // == PrimeNG Modules here == //
    ButtonModule,
    CarouselModule
  ]
})
export class PrimeNgModule { }
