import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentService } from '../../service/department.service';
import { Router } from '@angular/router';
import { Doctor } from '../../model/doctor.model';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-department.html',
  styleUrl: './add-department.css'
})
export class AddDepartment implements OnInit {
  
    doctors:Doctor[]=[];
    fromGroup !: FormGroup;

  constructor(
            private departmentService: DepartmentService,
            private formBuilder: FormBuilder,
            private router: Router) { }


  ngOnInit(): void {
    this.fromGroup = this.formBuilder.group({

      nameOfDepartment: [''],

      doctor: this.formBuilder.group({
        name: [''],
        location: [''],
        chamber: [''],
        specalist: [''],
        gender: ['']

      })


    });

     this.loadDoctorName();


    this.fromGroup.get('doctors')?.get('name')?.valueChanges.subscribe(name => {
      const selectedLocation = this.doctors.find(doctor => doctor.name === name);
      if (selectedLocation) {
        this.fromGroup.patchValue({ location: selectedLocation });
      }
    });


  }


  loadDoctorName(): void {

    this.doctor.getAllDepartment().subscribe({

      next : (doctors) => {
        this.doctors = doctors;

      },
      error: (error) => {

        console.log(error);
      }

    });

  }

  addDepartment(): void {

     if (this.fromGroup.invalid) {
      return; 
    }


    const departments = { ...this.fromGroup.value };
    this.departmentService.saveDepartment(departments).subscribe({

      next: (res) => {
        console.log("Saved Department", res);
        this.fromGroup.reset();
         this.loadDoctorName();
        this.router.navigate(['/viewDep']);

      },

      error: (error) => {
        console.log(error);
      }

    })


  }

  }
