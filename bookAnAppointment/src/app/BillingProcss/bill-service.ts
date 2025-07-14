import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillModel } from './model/billModel';
import { Doctor } from '../dropdown/model/doctorModel';
import { PatientDocModel } from '../patient/model/patientDocModel';
import { TotalBillModel } from './model/totalBillModel';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiUrl: string = "http://localhost:3000/totalBillModel";

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }
  getAllPatients(): Observable<PatientDocModel[]> {
    return this.http.get<PatientDocModel[]>(this.apiUrl);
  }

  saveBill(bill: BillModel): Observable<any> {
    return this.http.post(this.apiUrl, bill);
  }

  // getAllBills(): Observable<any> {
  //   return this.http.get<TotalBillModel>(`${this.apiUrl}/`);
  // }

  createBill(bill: TotalBillModel): Observable<TotalBillModel> {
    return this.http.post<TotalBillModel>(`${this.apiUrl}/create`, bill);
  }

}
