import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorModel } from '../../model/DoctorModel';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  baseUrl: string = "http://localhost:3000/doctorsList";
  constructor(private http: HttpClient) { }

  getAllDoctor(): Observable<any> {

    return this.http.get(this.baseUrl);
  }

  saveDoctor(doctor: DoctorModel): Observable<any> {
    return this.http.post(this.baseUrl, doctor);
  }

  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getDoctorById(id:string):Observable<any>{

    return this.http.get(this.baseUrl+'/'+id);

  }

  
updateDoctor(id:string, doctor:DoctorModel):Observable<any>{

return this.http.put(this.baseUrl+ '/'+id,DoctorModel);

}          



}
