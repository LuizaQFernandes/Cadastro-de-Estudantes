import { Component, OnInit } from '@angular/core';
import {Student} from '../student'
import { StudentService } from '../student.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents()
    .subscribe(students => this.students = students);
  }

  add(age: number, name: string, parent: string, ra: number,  sala: string): void {
    name = name.trim();
    sala = sala.trim();
    parent = parent.trim();

    if (!name) 
    { 
      return; 
    }

    this.studentService.addStudent({ age, name, parent, ra, sala}  as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }
}
