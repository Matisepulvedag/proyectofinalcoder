import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inscription } from '../../../models/inscription.module';

@Component({
  selector: 'app-inscription-dialog',
  templateUrl: './inscription-dialog.component.html',
  styleUrls: ['./inscription-dialog.component.scss']
})
export class InscriptionDialogComponent {
  NameNameControl = new FormControl('')
  MatterNameControl = new FormControl('')


 IncriptionForm = new FormGroup({
    name : this.NameNameControl,
    matter : this.MatterNameControl,


  })
  constructor( private readonly dialogRef: DialogRef<InscriptionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Inscription,
 ){
  if(data){
    this.IncriptionForm.patchValue(data)
   }
 }


 close(){
  this.dialogRef.close()
 }
}
