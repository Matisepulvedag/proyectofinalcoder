import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { StudentsPageComponent } from './pages/students-page/students-page.component';
import { CursoComponent } from './pages/curso/curso.component';
import { InscripcionComponent } from './pages/inscripcion/inscripcion.component';

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
        path: 'curso',
        component: CursoComponent
      },
      {
        path: 'inscripcion',
        component: InscripcionComponent
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
