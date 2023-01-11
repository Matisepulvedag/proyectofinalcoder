import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CursoComponent } from './pages/curso/curso.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';
import { CleanLayoutComponent } from './layouts/clean-layout/clean-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { StudentsDetalleComponent } from './pages/students-detalle/students-detalle.component';

const routes : Routes =[
  {
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
        path:'login',
        component: LoginPageComponent,
      },
      {
        path:'**',
        redirectTo: 'login'
      }
    ]
  }
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
