import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookModel } from '../../model/bookModel.model';
import { BookService } from '../../service/book.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  standalone: false,
  templateUrl: './update-book.html',
  styleUrl: './update-book.css'
})
export class UpdateBook implements OnInit {

  id: string = '';
  book: BookModel = new BookModel();

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadBookById();
     console.log(this.book);

  }

  

  loadBookById() {

    this.bookService.getBookById(this.id).subscribe({
      next: (res) => {
        this.book = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateBook(): void {
    this.bookService.updateBook(this.id, this.book).subscribe({

      next: () => {
        this.router.navigate(['/viewBook'])

      },


      error: err => {
        console.error(err);
      }
    });
  }


}
