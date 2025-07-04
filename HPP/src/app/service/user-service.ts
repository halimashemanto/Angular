import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service';
import { Usermodel } from '../model/userModel.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl: string = "http://localhost:3000/user";

  constructor(
    private http: HttpClient,
    private authService: AuthService ) { }

  getUserProfile(): Observable<Usermodel| null> {
    return of(this.authService.getUserProfileFromStorage());
  }


    updateUserProfile(user: Usermodel): Observable<Usermodel> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<Usermodel>(`${this.baseUrl}/${user.id}`, user);
  }
  
}
