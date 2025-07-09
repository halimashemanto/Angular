import { Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { ActivatedRoute, Router } from '@angular/router';
import { Patientdocservice } from '../patientdocservice';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css'
})
export class UpdatePatient implements OnInit {
  patient: PatientDocModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: Patientdocservice
  ) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.patientService.getPatient(id).subscribe({
        next: response => {
          this.patient = response;
        },
        error: error => {
          console.error('Error retrieving patient', error);
        }
      })
    } else {
      alert('Could not find id')
    }
  }

  updatePatient(): void {
    if (this.patient) {
      this.patientService.updatePatient(this.patient).subscribe(() => {
        this.router.navigate(['viewpatient']);
      })
    }
  }
}