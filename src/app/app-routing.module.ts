import { NgModule, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { LandingPageComponent } from './module/landing/landing-page/landing-page.component';
import { ProjectViewComponent } from './module/project/project-view/project-view.component';
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
        path: 'hridoyahmed',
        loadChildren: () => import('./modules/classes-module/classes.module').then(m =>
          m.ClassesModule
        )
      }
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
