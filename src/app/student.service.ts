import { Student } from './student'
import { STUDENTS } from './mock-students'
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]>{
    const students = of (STUDENTS);
    this.messageService.add('StudentService: fetched students');
    return students;
  }

  getStudent(ra: number): Observable<Student> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const student = STUDENTS.find(s => s.ra === ra) as Student;
    this.messageService.add(`StudentService: fetched student ra=${ra}`);
    return of(student);
  }
}
