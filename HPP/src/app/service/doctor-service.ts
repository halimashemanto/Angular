import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctormodel } from '../model/doctorModel';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

 private apiUrl = "http://localhost:3000/doctorModel";

  constructor(private http: HttpClient) { }

  getAllDoctor(): Observable<Doctormodel[]> {
    return this.http.get<Doctormodel[]>(this.apiUrl);
  }

  addDoctor(doctormodel: Doctormodel): Observable<Doctormodel> {
    return this.http.post<Doctormodel>(this.apiUrl, doctormodel);
  }

  updateDoctor(doctormodel: Doctormodel): Observable<Doctormodel> {
    return this.http.put<Doctormodel>(`${this.apiUrl}/${doctormodel.id}`, doctormodel);
  }

  deleteDoctor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
