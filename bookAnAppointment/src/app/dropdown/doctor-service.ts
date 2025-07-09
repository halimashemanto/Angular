import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorModel } from './model/doctorModel';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  
  private apiUrl = 'http://localhost:3000/doctorModel';

  constructor(private http: HttpClient) {}

  getAllDoctorName(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(this.apiUrl);
  }

  addDoctorName(dm: DoctorModel): Observable<DoctorModel> {
    return this.http.post<DoctorModel>(this.apiUrl, dm);
  }

  updateDoctorName(dm: DoctorModel): Observable<DoctorModel> {
    return this.http.put<DoctorModel>(`${this.apiUrl}/${dm.id}`, dm);
  }

  deleteDoctorName(id: string ): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
}