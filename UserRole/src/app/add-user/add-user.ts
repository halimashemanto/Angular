import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-add-user',
  standalone: false,
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      'name': [''],
      'email': [''],
      'contactNo': [''],
      'role': ['']
    });

  }
  addUser():void{
    const users = {...this.formGroup.value};
    this.userService.saveUser(users).subscribe({
      next:(res)=>{
        this.formGroup.reset();
        this.router.navigate(['/addUser']);

      },
      error:(error)=>{

        console.log(error);
      }

    });
  }











}
