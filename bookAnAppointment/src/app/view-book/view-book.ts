import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookService } from '../sevice/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  standalone: false,
  templateUrl: './view-book.html',
  styleUrl: './view-book.css'
})
export class ViewBook implements OnInit {

  books :any;

constructor(
  private bookService : BookService,
  private router: Router,
  private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadAllBook();
  }
loadAllBook(){

  this.books = this.bookService.getAllBook();
}
deleteBook(id:string):void{
  this.bookService.deleteBook(id).subscribe({

    next:(res)=>{
      this.loadAllBook();
      this.cdr.reattach();

    },
    error:(error)=>{
console.log(error);

    }

  });

}


}
