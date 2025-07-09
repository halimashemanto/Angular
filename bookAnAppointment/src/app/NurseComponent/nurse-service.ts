import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NurseModel } from './modelnurse/nurseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {

 private apiUrl = "http://localhost:3000/nurseModel";

  constructor(private http: HttpClient) { }

  saveNurse(n:NurseModel):Observable<any>{
    return this.http.post(this.apiUrl,n);
  }

  deleteNurse(id:string):Observable<any>{
    return this.http.delete(this.apiUrl +'/'+id);
  }

  getNurse(): Observable<NurseModel> {
    return this.http.get<NurseModel>(this.apiUrl);
  }

  updateProfile(n: NurseModel): Observable<NurseModel> {
    return this.http.put<NurseModel>(this.apiUrl, n);
  }
}