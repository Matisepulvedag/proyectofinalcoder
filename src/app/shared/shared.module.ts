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



@NgModule({
  declarations: [
    StudentDialogComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    MyMaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    StudentDialogComponent,
    HeaderComponent,
    PageWrapperComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
