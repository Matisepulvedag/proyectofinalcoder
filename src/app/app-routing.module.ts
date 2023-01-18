import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './dashboard/students/pages/students-page/students-page.component';
import { CursoComponent } from './dashboard/courses/pages/curso/curso.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { CleanLayoutComponent } from './layouts/clean-layout/clean-layout.component';
import { StudentsDetalleComponent } from './pages/students-detalle/students-detalle.component';
import { AuthGuard } from './auth/guards/guards/auth.guard';

const routes : Routes =[
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
 /*  {
    path: '',
    component: DashboardLayoutComponent,
    children:[
      {
        path: "students",
        component: StudentsPageComponent,
      },
      {
        path: 'students/:id',
        component: StudentsDetalleComponent,
      },
      {
        path: 'curso',
        component: CursoComponent,
      },
      {
        path: 'inscripcion',
        component: InscripcionComponent
      }
    ]
  },
  {
    path:'auth',
    component: CleanLayoutComponent,
    children:[
      {
        path:'**',
        redirectTo: 'login'
      }
    ]
  } */
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
