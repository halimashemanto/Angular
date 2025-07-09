import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../doctor-service';
import { DoctorModel } from '../model/doctorModel';

@Component({
  selector: 'app-doctor',
  standalone: false,
  templateUrl: './doctor.html',
  styleUrl: './doctor.css'
})
export class Doctor implements OnInit {
  
  dm: DoctorModel[] = [];
  dmForm: FormGroup;
  editing: boolean = false;

  constructor(
    private formbuilder: FormBuilder,
    private doctorService: DoctorService
  ) {
    this.dmForm = this.formbuilder.group({
      id: [''], 
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadDoctorName();
  }

  loadDoctorName() {
    this.doctorService.getAllDoctorName().subscribe(data => {
      this.dm = data;
    });
  }

  onSubmit() {
  if (this.dmForm.invalid) return;

  if (this.editing) {
    this.doctorService.updateDoctorName(this.dmForm.value).subscribe(() => {
      alert('Updated successfully!');
      this.loadDoctorName();
      this.cancelEdit();
    });
  } else {
    const { name } = this.dmForm.value;
    this.doctorService.addDoctorName({ name }).subscribe(() => {
      // alert('Added successfully!');
      this.loadDoctorName();
      this.dmForm.reset();
      this.editing = false;
    });
  }
}

  updateDoctorName(dm:DoctorModel) {
    this.editing = true;
    this.dmForm.patchValue({
      id: dm.id,
      name: dm.name
    });
  }

  deleteDoctorName(id: string ) {
    if (confirm('Are you sure?')) {
      this.doctorService.deleteDoctorName(id).subscribe(() => {
        alert('Deleted!');
        this.loadDoctorName();
      });
    }
  }

  cancelEdit() {
    this.editing = false;
    this.dmForm.reset();
  }
}
