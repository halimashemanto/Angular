import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReceptionistModel } from '../model/ReceptionistModel';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
    private apiUrl = "http://localhost:3000/ReceptionistModel";

  constructor(private http: HttpClient) {}

  saveReciptionistName(reciptionist:ReceptionistModel ): Observable<any> {

    return this.http.post(this.apiUrl, reciptionist);

  }

  deleteReciptionist(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + "/" + id);
  }


  getReciptionist(): Observable<ReceptionistModel> {
    return this.http.get<ReceptionistModel>(this.apiUrl);
  }

  updateReciptionist(profile: ReceptionistModel): Observable<ReceptionistModel> {
    return this.http.put<ReceptionistModel>(this.apiUrl, profile);
  }


}
