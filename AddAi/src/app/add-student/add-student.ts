import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent implements OnInit {

  fromGroup !: FormGroup;

  constructor(private studentService: StudentService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.fromGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      contactNo: ['']

    });

  }

  addStudent(): void {

    const student = { ...this.fromGroup.value };
    this.studentService.saveStudent(student).subscribe({

      next: (res) => {
        console.log("Saved Student", res);
        this.fromGroup.reset();
        this.router.navigate(['/viewstu']);

      },

      error: (error) => {
        console.log(error);
      }

    })

    


  }


















}