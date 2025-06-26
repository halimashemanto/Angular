import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../model/doctor';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  baseUrl: string = "http://localhost:3000/doctors";
  constructor(private http: HttpClient) { }

  getAllDoctor(): Observable<any> {

    return this.http.get(this.baseUrl);
  }

  saveDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(this.baseUrl, doctor);
  }

  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getDoctorById(id:string):Observable<any>{

    return this.http.get(this.baseUrl+'/'+id);

  }

  
updateDoctor(id:string, doctor:Doctor):Observable<any>{

return this.http.put(this.baseUrl+'/'+id, Doctor);

}          



}
