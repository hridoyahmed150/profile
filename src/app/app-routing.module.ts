import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'hridoyahmed',
    pathMatch: 'full'
  },
  {
    path: 'hridoyahmed',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./module/landing/landing.module').then(m =>
          m.LandingModule
        )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'hridoyahmed'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
