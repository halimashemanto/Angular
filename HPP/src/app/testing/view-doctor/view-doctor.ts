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
export class ViewDoctor implements OnInit {

  doctor: Doctormodel[] = [];
  departmentModel: DepartmentModel[] = [];

  constructor(
    private doctorService: DoctorService,
    private departmentService: DrpartmentService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.doctorService.getAllDoctor().subscribe({
      next: (res) => {

        this.doctor = res;
      },

      error: (err) => {
        console.log(err);

      }

    });

  }

  deleteDoctor(id: string) {
    if (confirm('Are you sure?')) {
      this.doctorService.deleteDoctor(id).subscribe(() => {
        alert('Doctor deleted!');
        this.loadData();
      });
    }
  }


}
