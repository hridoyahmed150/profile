import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NgParticlesModule } from 'ng-particles';

const impExpModule = [
  CommonModule,
  SwiperModule,
  NgParticlesModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...impExpModule
  ],
  exports: [
    ...impExpModule
  ]
})
export class ShareModule { }
