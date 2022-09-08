import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { ProjectViewComponent } from './project-view/project-view.component';

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
        component: LandingPageComponent
      },
      {
        path: 'works',
        component: ProjectViewComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'hridoyahmed'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
