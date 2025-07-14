import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './model/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllMedicines(): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/`);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/${id}`);
  }

}
