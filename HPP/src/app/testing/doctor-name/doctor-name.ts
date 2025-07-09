import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentModel } from '../../model/departmentModel';
import { DoctorService } from '../../service/doctor-service';
import { DrpartmentService } from '../../service/drpartment-service';
import { Doctormodel } from '../../model/doctorModel';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-doctor-name',
  standalone: false,
  templateUrl: './doctor-name.html',
  styleUrl: './doctor-name.css'
})
export class DoctorName implements OnInit {

  doctorForm: FormGroup;
  departmentModel: DepartmentModel[] = [];
  doctors: Doctormodel[] = [];
  editing: boolean = false;
  editingDoctorId: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private departmentService: DrpartmentService,
    private router: Router
  ) {
    this.doctorForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      departmentId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadDepartments();
    this.loadDoctors();
  }

  loadDepartments() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departmentModel = data;
    });
  }

  loadDoctors() {
    this.doctorService.getAllDoctor().subscribe(data => {
      this.doctors = data;
    });
  }

  onSubmit() {
    if (this.doctorForm.invalid) return;

    const formValue = this.doctorForm.value;

    const doctor: Doctormodel = {
       id: this.editingDoctorId || uuidv4(),
      name: formValue.name,
      departmentModel: this.departmentModel.find(dep => dep.id === formValue.departmentId)!
    };

    if (this.editing) {
      this.doctorService.updateDoctor(doctor).subscribe(() => {
        alert('Doctor updated!');
        this.loadDoctors();
        this.cancelEdit();
      });
    } else {
      this.doctorService.addDoctor(doctor).subscribe(() => {
        alert('Doctor added!');
        this.loadDoctors();
        this.doctorForm.reset();
      });
    }
  }

  editDoctor(doctor: Doctormodel) {
    this.editing = true;
    this.editingDoctorId = doctor.id;

    this.doctorForm.patchValue({
      name: doctor.name,
      departmentId: doctor.departmentModel.id
    });
  }

  deleteDoctor(id: string) {
    if (confirm('Are you sure you want to delete this doctor?')) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        alert('Doctor deleted!');
        this.loadDoctors();
      });
    }
  }

  cancelEdit() {
    this.editing = false;
    this.editingDoctorId = null;
    this.doctorForm.reset();
  }


}

