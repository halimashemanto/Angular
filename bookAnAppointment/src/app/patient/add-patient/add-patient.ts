import { Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { Patientdocservice } from '../patientdocservice';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-patient',
  standalone: false,
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.css'
})
export class AddPatient implements OnInit {


  pGroup !: FormGroup;

  constructor(private patientService: Patientdocservice,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.pGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      gender: [''],
      photo: [''],
      employeeId: [''],
      position: [''],
      department: [''],
      workHours: [''],
      role:['']

    });

  }
  
 
}