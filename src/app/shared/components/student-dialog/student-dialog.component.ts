import { Component, Inject, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DialogRef, } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/student.model';


@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent {
 firstNameControl = new FormControl('')
  lastNameControl = new FormControl('')
  studentForm = new FormGroup({
    firstName : this.firstNameControl,
    lastName: this.lastNameControl,
  })

 constructor( private readonly dialogRef: DialogRef<StudentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Student,
 ){
  if(data){
    this.studentForm.patchValue(data)
   }
 }


 close(){
  this.dialogRef.close()
 }
}
