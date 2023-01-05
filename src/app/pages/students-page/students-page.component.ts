import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  students:  Student[] = [
    new Student (1,'matias','sepulveda', true),
    new Student (2,'pedro','agurto', true),
    new Student (3,'juan','perez', true),
    new Student (4,'eduardo','sepulveda', false)
  ]
  displayedColumns = ['id','firstName','lastName','signedup','edit','delete']

  constructor( private readonly dialogService: MatDialog){}

  addStudent(){
     const dialog = this.dialogService.open(StudentDialogComponent)

      dialog.afterClosed().subscribe((value) => {
        if(value) {
          const lastId = this.students[this.students.length - 1]?.id;
         this.students = [...this.students,new Student(lastId + 1, value.firstName, value.lastName, true)];
        }
      })
    }
    deleteStudent(Student: Student){
      this.students = this.students.filter((stu) => stu.id !== Student.id);
    }
    editStudent(Student: Student){
      const dialog = this.dialogService.open(StudentDialogComponent,{
        data: Student,
        })

        dialog.afterClosed().subscribe((data) =>{
       if(data){
       this.students = this.students.map((stu) => stu.id === Student.id ? {...stu,... data} : stu)
       }
        })
    }
}
