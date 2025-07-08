import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../model/departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DrpartmentService {
 private apiUrl ="http://localhost:3000/departmentModel";

  constructor(private http: HttpClient,
   
  ) {}

  getAllDepartment(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(this.apiUrl);
  }

  addDepartment(departmentModel: DepartmentModel): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(this.apiUrl, departmentModel);
  }

  updateDepartment(departmentModel: DepartmentModel): Observable<DepartmentModel> {
    return this.http.put<DepartmentModel>(`${this.apiUrl}/${departmentModel.id}`, departmentModel);
  }

  deleteDepartment(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}