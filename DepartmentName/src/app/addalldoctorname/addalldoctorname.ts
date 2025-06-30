import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Doctorname } from '../service/doctorname';
import { Router } from '@angular/router';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-addalldoctorname',
  standalone: false,
  templateUrl: './addalldoctorname.html',
  styleUrl: './addalldoctorname.css'
})
export class Addalldoctorname implements OnInit{

  doctors:Doctor[]=[];
  

  formGroup !: FormGroup;

  constructor(

         private doctorName: Doctorname,
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
    this.doctorName.saveDoctor(doctor).subscribe({

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
