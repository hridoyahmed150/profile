import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwiperModule } from 'swiper/angular';
import { LandingPageComponent } from './landing-page/landing-page.component'
import { NgParticlesModule } from "ng-particles";
import { ProjectViewComponent } from './project-view/project-view.component';

import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { BlanckLayoutComponent } from './layout/blanck-layout/blanck-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectViewComponent,
    HeaderComponent,
    FooterComponent,
    CommonLayoutComponent,
    BlanckLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    NgParticlesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
