import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../../model/bookModel.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl : string = "http://localhost:3000/bookModel";

  constructor(private http: HttpClient) { }

   getAllBook():Observable<any>{
    return this.http.get(this.baseUrl);
  }

  saveBook(books:BookModel):Observable<any>{
    return this.http.post(this.baseUrl,books);
  }

  deleteBook(id:string):Observable<any>{
    return this.http.delete(this.baseUrl +'/'+id);
  }

  getBookById(id:string):Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
  updateBook(id: string, book: BookModel): Observable<any>{

    return this.http.put(this.baseUrl+'/'+id, book);
  }
}
