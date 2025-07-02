import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Usermodel } from '../model/userModel.model';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { AuthResponse } from '../model/authResponse';
import { error } from 'console';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/bookModel";
  private currentUserSubject: BehaviorSubject<Usermodel | null>;
  public currentUser$: Observable<Usermodel | null>;

  constructor(
    private http: HttpClient
        @Inject(PLATFORM_ID) private platformId: object) {

    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<Usermodel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();


  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registration(user: Usermodel): Observable<AuthResponse> {

    return this.http.post<Usermodel>(this.baseUrl, user).pipe(
      map((newUser: Usermodel) => {

        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as AuthResponse;

      }),
      catchError(error => {

        throw error
      })

    )

  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {

    let params = new HttpParams().append('email', credentials.email);

    return this.http.get<Usermodel[]>(`${this.baseUrl}`, { params }).pipe(

      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.storeToken(token);
            this.setCurrentUser(user);
            return { token, user } as AuthResponse;
          }
          else {
            throw  error('Invalid Passwod');
          }
        }
        else {
          throw error('Login error', error);
        }

      }),
      catchError(error => {
        throw error;
      })

    );
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  private setCurrentUser(user: Usermodel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  logout():void{
    this.clearCurrentUser();
    if(this.isBrowser()){
      localStorage.removeItem('token');
    }
  }

  private clearCurrentUser():void{
    if(this.isBrowser()){
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  getUserRole():any{
    return this.currentUserValue?.role;
  }

  public get currentUserValue():Usermodel | null{
    return this.currentUserSubject.value;
  }

  getToken():string | null{
    return this.isBrowser()?localStorage.getItem('token'):null;
  }

  isAuthenticated():boolean{
    return !! this.getToken();
  }

  storeUserProfile(user:Usermodel): void{
    if(this.isBrowser()){
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getUserProfileFromStorage(): Usermodel | null{
    if(this.isBrowser()){
      const userProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }







}
