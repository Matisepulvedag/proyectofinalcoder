import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MyMaterialModule } from './modules/my-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog.component';
import { InscriptionDialogComponent } from './components/inscription-dialog/inscription-dialog.component';



@NgModule({
  declarations: [
    StudentDialogComponent,
     CursoDialogComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
    NotFoundComponent,
    InscriptionDialogComponent,


  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    StudentDialogComponent,
    CursoDialogComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
