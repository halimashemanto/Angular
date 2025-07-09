import { Component } from '@angular/core';
import { PatientDocModel } from '../model/patientDocModel';
import { Patientdocservice } from '../patientdocservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  standalone: false,
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.css'
})
export class AddPatient {
  patient: PatientDocModel = new PatientDocModel();

  constructor(private patientService: Patientdocservice,
     private router: Router) { }

  addPatient(): void {
    this.patientService.addPatient(this.patient).subscribe(() => 
      this.router.navigate(['viewpatient']
      ));
  }
}
