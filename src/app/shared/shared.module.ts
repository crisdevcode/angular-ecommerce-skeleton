import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedPaintingsComponent } from './components/featured-paintings/featured-paintings.component';
import { FeaturedArtistsComponent } from './components/featured-artists/featured-artists.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    HeroComponent,
    FeaturedPaintingsComponent,
    FeaturedArtistsComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    HeroComponent,
    FeaturedPaintingsComponent,
    FeaturedArtistsComponent
  ]
})
export class SharedModule { }
