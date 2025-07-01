import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = "http://localhost:3000/userModel";

  constructor(private http:HttpClient) { }

  getAllUser():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  saveUser(users:UserModel):Observable<any>{
    return this.http.post(this.baseUrl,users);
  }

  deleteUser(id:string):Observable<any>{
    return this.http.delete(this.baseUrl +'/'+id);
  }

  getUserById(id:string):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
    
  // updateUser(id:string):Observable<any>{
  //   return this.http.put(this.baseUrl+'/'+id);
  // }
 
}
