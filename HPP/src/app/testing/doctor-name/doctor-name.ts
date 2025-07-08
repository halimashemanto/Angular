import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentModel } from '../../model/departmentModel';
import { DoctorService } from '../../service/doctor-service';
import { DrpartmentService } from '../../service/drpartment-service';
import { Doctormodel } from '../../model/doctorModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-name',
  standalone: false,
  templateUrl: './doctor-name.html',
  styleUrl: './doctor-name.css'
})
export class DoctorName implements OnInit {
  doctorForm: FormGroup;
  departmentModel: DepartmentModel[] = [];
   editing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private departmentService: DrpartmentService,
    private router: Router
  ) {
    this.doctorForm = this.formBuilder.group({
      name: ['', Validators.required],
      departmentModel: [[], Validators.required]
    });
  }

  ngOnInit() {
    this.loadDepartment();
  }

  loadDepartment() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departmentModel = data;
    });
  }

  onSubmit() {
    if (this.doctorForm.invalid) return;

    const doc: Doctormodel = this.doctorForm.value;

    this.doctorService.addDoctor(doc).subscribe(() => {
      alert('Doctor added successfully!');
      this.doctorForm.reset();
      this.router.navigate(['/v']);
    });
  }

   editDepartment(dep: DepartmentModel) {
    this.editing = true;
    this.doctorForm.patchValue({
      id: dep.id,
      name: dep.dname
    });
  }

  deleteDepartment(id: string ) {
    if (confirm('Are you sure?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        alert('Deleted!');
        this.loadDepartment();
      });
    }
  }

  cancelEdit() {
    this.editing = false;
    this.doctorForm.reset();
  }
}

