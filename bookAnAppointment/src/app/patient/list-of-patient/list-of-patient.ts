import { Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Patientdocservice } from '../patientdocservice';

@Component({
  selector: 'app-list-of-patient',
  standalone: false,
  templateUrl: './list-of-patient.html',
  styleUrl: './list-of-patient.css'
})
export class ListOfPatient implements OnInit {
  patients: PatientDocModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: Patientdocservice
  ) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: res => {
        this.patients = res;
      },
      error: error=>{
        alert('Could not fetch patients')
      }
    });
  }

  goBack(): void {
    this.router.navigate(['viewpatient']);
  }
}