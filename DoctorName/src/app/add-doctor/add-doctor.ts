import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorService } from '../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  standalone: false,
  templateUrl: './add-doctor.html',
  styleUrl: './add-doctor.css'
})
export class AddDoctor implements OnInit{


  fromGroup !: FormGroup;

  constructor(private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.fromGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      contactNo: ['']

    });

  }

  addDoctorName(): void {

    const doctors = { ...this.fromGroup.value };
    this.doctorService.saveDoctorName(doctors).subscribe({

      next: (res) => {
        console.log("Saved Doctor name", res);
        this.fromGroup.reset();
        this.router.navigate(['/viewDoctor']);

      },

      error: (error) => {
        console.log(error);
      }

    })

    


  }
}