import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../model/departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DrpartmentService {
 private apiUrl ="http://localhost:3000/departmentModel";

  constructor(private http: HttpClient) {}

  getAll(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(this.apiUrl);
  }

  add(departmentModel: DepartmentModel): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(this.apiUrl, departmentModel);
  }

  update(departmentModel: DepartmentModel): Observable<DepartmentModel> {
    return this.http.put<DepartmentModel>(`${this.apiUrl}/${departmentModel.id}`, departmentModel);
  }

  delete(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}