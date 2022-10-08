import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

const impExpModule = [
  CommonModule,
  SwiperModule
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
