import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorName } from '../../model/doctorName';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl: string = "http://localhost:3000/doctorName";

  constructor(private http:HttpClient) { }

  getAllDoctorName(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveDoctorName(doctors: DoctorName): Observable<any> {

    return this.http.post(this.baseUrl, doctors);

  }

  deleteDoctorName(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  getDoctorNameById(id:string):Observable<any>{

      return this.http.get(this.baseUrl+'/'+id);

  }






}