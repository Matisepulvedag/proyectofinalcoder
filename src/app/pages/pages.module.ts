import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from './students-page/students-page.component';
import { MyMaterialModule } from '../shared/modules/my-material.module';
import { CursoComponent } from './curso/curso.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';



@NgModule({
  declarations: [
    StudentsPageComponent,
    CursoComponent,
    InscripcionComponent
  ],
  imports: [
    CommonModule,
    MyMaterialModule
  ]
})
export class PagesModule { }
