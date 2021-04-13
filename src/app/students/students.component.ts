import { Component, OnInit } from '@angular/core';
import {Student} from '../student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student = {
    ra: 1234,
    name: 'Ana',
    age: 12,
    class: '3° Grade',
    parentName: 'Maria',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
