import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students-detalle',
  templateUrl: './students-detalle.component.html',
  styleUrls: ['./students-detalle.component.scss']
})
export class StudentsDetalleComponent  implements OnInit {
 constructor(private readonly Router: ActivatedRoute , private readonly studentsService: StudentsService){

/* this.Router.params.subscribe() */
 }
  ngOnInit(): void {
     this.Router.params.subscribe((params) =>{
      console.log(  this.studentsService.getStudentPorId(params['id']));

     })


  }
}
