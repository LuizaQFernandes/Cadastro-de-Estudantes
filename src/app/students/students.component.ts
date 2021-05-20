import { Component, OnInit } from '@angular/core';
import {Student} from '../student'
import { StudentService } from '../student.service'
import { MessageService } from '../message.service';

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

  add(name: string, ra: number, age: number, studentClass: string, parentName: string): void {
    name = name.trim();
    studentClass = studentClass.trim();
    parentName = parentName .trim();

    if (!name) 
    { 
      return; 
    }

    this.studentService.addStudent({ name, ra, age, studentClass, parentName }  as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }
}
