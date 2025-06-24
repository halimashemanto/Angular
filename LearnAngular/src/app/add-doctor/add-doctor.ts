import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorServiceService } from '../service/doctor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  standalone: false,
  templateUrl: './add-doctor.html',
  styleUrl: './add-doctor.css'
})
export class AddDoctor implements OnInit {

  formGroup !: FormGroup;

  constructor(

         private doctorService: DoctorServiceService,
         private fromBuilder: FormBuilder,
         private router: Router

     ) { }





  ngOnInit(): void {

    this.formGroup = this.fromBuilder.group({

      name : [''],
      location: [''],
      chamber: [''],
      specalist: [''],
      gender: ['']

    });
  }

  addDoctor():void{

    const doctor ={...this.formGroup.value};
    this.doctorService.saveDoctor(doctor).subscribe({

      next : (res) =>{

        this.formGroup.reset();
        this.router.navigate(['/viewDoctor'])

      },

      error:(error) =>{
        console.log(error);
        
      }


    })
  }




}
