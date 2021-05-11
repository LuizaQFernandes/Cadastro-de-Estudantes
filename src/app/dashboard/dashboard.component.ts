import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../Student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];

  constructor(private StudentService: StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.StudentService.getStudents()
      .subscribe(students => this.students = students.slice(1, 5));
  }
}