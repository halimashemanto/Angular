import { Component, OnInit } from '@angular/core';
import { Doctormodel } from '../../model/doctorModel';
import { DepartmentModel } from '../../model/departmentModel';
import { DoctorService } from '../../service/doctor-service';
import { DrpartmentService } from '../../service/drpartment-service';

@Component({
  selector: 'app-view-doctor',
  standalone: false,
  templateUrl: './view-doctor.html',
  styleUrl: './view-doctor.css'
})
export class ViewDoctor implements OnInit{

   doctor: Doctormodel[] = [];
  departmentModel!: DepartmentModel[];

  constructor(
    private doctorService: DoctorService,
    private departmentService: DrpartmentService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.departmentService.getAllDepartment().subscribe(departmentService => {
      this.departmentModel = departmentService;
      this.doctorService.getAllDoctor().subscribe(doctor => {
        this.doctor = doctor;
      });
    });
  }

  getDepartment(ids: string[]): string {
    const names = this.departmentModel
      .filter(doc => ids.includes(doc.id!))
      .map(doc => doc.dname);
    return names.join(', ');
  }


  deleteDoctor(id: string) {
    if (confirm('Are you sure?')) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        alert('District deleted!');
        this.loadData();
      });
    }
  }

}
