import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './model/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  private apiUrl = "http://localhost:3000/medicine";

  constructor(private http: HttpClient) {}

  getAllMedicines(): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/`);
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/${id}`);
  }
   

  addMedicine(medicine: {
    medicineStrength: string;
    instructions: string;
    price: number;
    dosageForm: string;
    id: number;
    stock: number;
    medicineName: string;
    manufacturer: {id: number }
  }): Observable<Medicine> {
    return this.http.post<Medicine>(`${this.apiUrl}/`, medicine);
  }

  updateMedicine(id: number, medicine: Medicine): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.apiUrl}/${id}`, medicine);
  }

  deleteMedicine(id: number): Observable<Medicine> {
    return this.http.delete<Medicine>(`${this.apiUrl}/${id}`);
  }

  addStock(id: number, quantity: number): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.apiUrl}/${id}/add-stock?quantity=${quantity}`, {});
  }

  subtractStock(id: number, quantity: number): Observable<Medicine> {
    return this.http.put<Medicine>(`${this.apiUrl}/${id}/subtract-stock?quantity=${quantity}`, {});
  }

  searchMedicinesByName(name: string): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/search?name=${name}`);
  }

  getMedicinesByManufacturer(manufacturerId: number): Observable<Medicine> {
    return this.http.get<Medicine>(`${this.apiUrl}/manufacturer/${manufacturerId}`);
  }
}
