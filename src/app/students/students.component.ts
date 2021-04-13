import { Component, OnInit } from '@angular/core';
import {Student} from '../student'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
  })
  
  student: Student = {
    ra: 1234,
    name: 'Ana',
    age: 12,
    class: '3° Ano',
    parentName: 'Maria',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
