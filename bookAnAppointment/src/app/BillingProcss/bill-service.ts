import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillModel } from './model/billModel';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  baseUrl: string = "http://localhost:3000/billModel";

  constructor(private http: HttpClient) { }

   getAllBill():Observable<any>{
     return this.http.get(this.baseUrl);
   }
 
   saveBill(bill:BillModel):Observable<any>{
     return this.http.post(this.baseUrl,bill);
   }
 
   deleteBill(id:string):Observable<any>{
     return this.http.delete(this.baseUrl +'/'+id);
   }
 
   getBillById(id:string):Observable<any>{
     return this.http.get(this.baseUrl+'/'+id);
   }
   updateBook(id: string, bill: BillModel): Observable<any>{
 
     return this.http.put(this.baseUrl+'/'+id, bill);
   }
 }
