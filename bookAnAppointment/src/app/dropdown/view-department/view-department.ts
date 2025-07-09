import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../model/departmentModel';
import { DoctorModel } from '../model/doctorModel';
import { DepartmentService } from '../department-service';
import { DoctorService } from '../doctor-service';

@Component({
  selector: 'app-view-department',
  standalone: false,
  templateUrl: './view-department.html',
  styleUrl: './view-department.css'
})
export class ViewDepartment implements OnInit {
 
  departmentModel: DepartmentModel[] = [];
  doctorModel!: DoctorModel[];

  constructor(
    private departmentService: DepartmentService,
    private doctorService: DoctorService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.doctorService.getAllDoctorName().subscribe(ps => {
      this.doctorModel = ps;
      this.departmentService.getAllDepartment().subscribe(districts => {
        this.departmentModel = districts;
      });
    });
  }

  getDoctorNames(ids: string[]): string {
    const names = this.doctorModel
      .filter(ps => ids.includes(ps.id!))
      .map(ps => ps.name);
    return names.join(', ');
  }


  deleteDepartment(id: string) {
    if (confirm('Are you sure?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        alert('Department deleted!');
        this.loadData();
      });
    }
  }


}