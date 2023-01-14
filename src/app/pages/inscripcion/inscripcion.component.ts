import { Component } from '@angular/core';
import { Inscription } from 'src/app/models/inscription.module';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionDialogComponent } from '../../shared/components/inscription-dialog/inscription-dialog.component';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.scss']
})
export class InscripcionComponent {
  Inscription: Inscription[] = [
    new Inscription (1,'matias sepulveda','Angular', true),
    new Inscription (2,'eduardo sepulveda','Fullstack', true),
    new Inscription (3,'juan perez','Python',true),
    new Inscription (4,'arturo vidal','React Js', false)
  ]
  displayedColumns = ['id','name','matter','passedp','edit','delete']
  constructor(private readonly dialogService: MatDialog){}

  addInscription(){
    const dialog = this.dialogService.open(InscriptionDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if(value) {
        const lastId = this.Inscription[this.Inscription.length - 1]?.id;
       this.Inscription = [...this.Inscription,new Inscription(lastId + 1,   value.name,value.matter, true)];
      }
    })
  }
  deleteIncription(Inscription: Inscription){
    this.Inscription = this.Inscription.filter((ins) => ins.id !== Inscription.id);
  }
  editIncription(Inscription: Inscription){
    const dialog = this.dialogService.open(InscriptionDialogComponent,{
      data: Inscription,
      })

      dialog.afterClosed().subscribe((data) =>{
     if(data){
     this.Inscription = this.Inscription.map((ins) => ins.id === Inscription.id ? {...ins,... data} : ins)
     }
      })
  }

}

