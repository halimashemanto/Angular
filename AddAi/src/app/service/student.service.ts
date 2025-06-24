import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from '../model/student/StudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl ="http://localhost:3000/students";

  constructor(private http: HttpClient){

    getAllStudent(): Observable<any>
    
      return this.http.get(this.baseUrl);


    

  }

}
