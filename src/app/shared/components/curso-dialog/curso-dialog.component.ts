import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../../../models/curso.module';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrls: ['./curso-dialog.component.scss']
})
export class CursoDialogComponent {
  cursoNameControl = new FormControl('')
  nameNameControl = new FormControl('')

  cursoForm = new FormGroup({
    curso : this.cursoNameControl,
    name : this.nameNameControl

  })
  constructor( private readonly dialogRef: DialogRef<CursoDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Curso,
 ){
  if(data){
    this.cursoForm.patchValue(data)
   }
 }


 close(){
  this.dialogRef.close()
 }
}

