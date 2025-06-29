import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentService } from '../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-department.html',
  styleUrl: './add-department.css'
})
export class AddDepartment implements OnInit {

  fromGroup !: FormGroup;

  constructor(private departmentService: DepartmentService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.fromGroup = this.formBuilder.group({

      nameOfDepartment: ['']
     

    });

  }

  addDepartment(): void {

    const departments= { ...this.fromGroup.value };
    this.departmentService.saveDepartment(departments).subscribe({

      next: (res) => {
        console.log("Saved Department", res);
        this.fromGroup.reset();
        this.router.navigate(['/viewDep']);

      },

      error: (error) => {
        console.log(error);
      }

    })

    


  }
}