import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student'

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})

export class StudentDetailComponent implements OnInit {

  @Input() student?: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
