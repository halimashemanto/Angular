import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../sevice/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: false,
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'name': [''],
      'email': [''],
      'phone': [''],
      'date': [''],
      'slot':['']
    });

  }
  addBook():void{
    const books = {...this.formGroup.value};
    this.bookService.saveBook(books).subscribe({
      next:(res)=>{
        this.formGroup.reset();
        this.router.navigate(['/addBook']);

      },
      error:(error)=>{

        console.log(error);
      }

    });
  }











}



