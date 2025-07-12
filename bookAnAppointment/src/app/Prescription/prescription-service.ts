import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from './model/prescriptionModel';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  baseUrl : string = "http://localhost:3000/prescriptionModel";

  constructor(private http: HttpClient) { }

   getAllPrescription():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  savePrescription(prescription:Prescription):Observable<any>{
    return this.http.post(this.baseUrl,prescription);
  }

  deletePrescription(id:string):Observable<any>{
    return this.http.delete(this.baseUrl +'/'+id);
  }

  getPrescriptionById(id:string):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
  updatePrescription(id: string, prescription: Prescription): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, prescription);
  }
}