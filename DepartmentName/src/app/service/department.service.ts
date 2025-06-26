import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../../model/departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService  {

  baseUrl: string ="http://localhost:3000/departmentModel";

  constructor(private http : HttpClient) { }

    getAllDepartment(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveDepartment(department : DepartmentModel): Observable<any> {

    return this.http.post(this.baseUrl, department);

  }

  deleteDepartment(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }



 
}
