import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student/StudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/students";

  constructor(private http:HttpClient) { }

  getAllStudent(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveStudent(student: StudentModel): Observable<any> {

    return this.http.post(this.baseUrl, student);

  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }








}