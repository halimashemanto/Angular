import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department-service';
import { DoctorService } from '../doctor-service';
import { DoctorModel } from '../model/doctorModel';
import { DepartmentModel } from '../model/departmentModel';

@Component({
  selector: 'app-department-name',
  standalone: false,
  templateUrl: './department-name.html',
  styleUrl: './department-name.css'
})
export class DepartmentName implements OnInit{

 depForm: FormGroup;
  doctorModel: DoctorModel[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private doctorService: DoctorService
  ) {
    this.depForm = this.fb.group({
      name: ['', Validators.required],
      policeStations: [[], Validators.required] 
    });
  }

  ngOnInit() {
    this.loadDoctorName();
  }

  loadDoctorName() {
    this.doctorService.getAllDoctorName().subscribe(data => {
      this.doctorModel = data;
    });
  }

  onSubmit() {
    if (this.depForm.invalid) return;

    const dep: DepartmentModel = this.depForm.value;

    this.departmentService.addDepartment(dep).subscribe(() => {
      alert('Department added successfully!');
      this.depForm.reset();
    });
  }
}