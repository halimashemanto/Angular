import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrescriptionService } from '../prescription-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prescription',
  standalone: false,
  templateUrl: './add-prescription.html',
  styleUrl: './add-prescription.css'
})
export class AddPrescription implements OnInit {

  prescriptionGroup!: FormGroup;

  constructor(
    private prescriptionService: PrescriptionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prescriptionGroup = this.formBuilder.group({
      'date': [''],
      'note': [''],
      'advice': [''],
      'name': [''],
      'age': [''],
      'phone': [''],
      'gender': [''],
      'address':['']
    });

  }
  addPrescription():void{
    const prescription = {...this.prescriptionGroup.value};
    this.prescriptionService.savePrescription(prescription).subscribe({
      next:(res)=>{
        this.prescriptionGroup.reset();
        this.router.navigate(['/viewprescription']);

      },
      error:(error)=>{

        console.log(error);
      }

    });
  }



}