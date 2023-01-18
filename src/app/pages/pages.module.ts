import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from '../dashboard/students/pages/students-page/students-page.component';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { CursoComponent } from '../dashboard/courses/pages/curso/curso.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { StudentsDetalleComponent } from './students-detalle/students-detalle.component';



@NgModule({
  declarations: [
    StudentsPageComponent,
    CursoComponent,
    InscripcionComponent,
    StudentsDetalleComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule
  ]
})
export class PagesModule { }
