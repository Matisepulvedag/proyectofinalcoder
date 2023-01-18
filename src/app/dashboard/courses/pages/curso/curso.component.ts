import { Curso } from '../../../../models/curso.module';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoDialogComponent } from '../../../../shared/components/curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent {
  Cursos:  Curso[] = [
    new Curso (1,'matias sepulveda','cuarto medio A', true),
    new Curso (2,'eduardo sepulveda','Primero medio B', true),
    new Curso (3,'juan perez','segundo B',true),
    new Curso (4,'arturo vidal','Tercero A', false)
  ]
  displayedColumns = ['id','name','Curso','passedp','edit','delete']
  constructor(private readonly dialogService: MatDialog){}
  addCurso(){
    const dialog = this.dialogService.open(CursoDialogComponent)

     dialog.afterClosed().subscribe((value) => {
       if(value) {
         const lastId = this.Cursos[this.Cursos.length - 1]?.id;
        this.Cursos = [...this.Cursos,new Curso(lastId + 1,   value.name,value.Curso,true)];
       }
     })
   }
   deleteCurso(Curso: Curso){
    this.Cursos = this.Cursos.filter((cur) => cur.id !== Curso.id);
  }
  editCurso(Curso: Curso){
    const dialog = this.dialogService.open(CursoDialogComponent,{
      data: Curso,
      })

      dialog.afterClosed().subscribe((data) =>{
     if(data){
     this.Cursos = this.Cursos.map((cur) => cur.id === Curso.id ? {...cur,... data} : cur)
     }
      })
  }
}

