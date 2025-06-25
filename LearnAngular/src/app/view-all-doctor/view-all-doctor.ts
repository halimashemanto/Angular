import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorServiceService } from '../service/doctor-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-all-doctor',
  standalone: false,
  templateUrl: './view-all-doctor.html',
  styleUrl: './view-all-doctor.css'
})
export class ViewAllDoctor implements OnInit {


  doctor: any;

  constructor(private doctorService: DoctorServiceService,
    private router: Router,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadAllDoctor();
  }


  loadAllDoctor() {

    this.doctor = this.doctorService.getAllDoctor();

  }


  deleteDoctor(id: string): void {
    this.doctorService.deleteDoctor(id).subscribe({
      next: () => {

        console.log(" deleted");
        this.loadAllDoctor();
        this.cdr.reattach();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }


  getDoctorById(id: string): void {
    this.doctorService.getDoctorById(id).subscribe({

      next: () => {

        this.router.navigate(['/updateDoctor', id]);

      },
      error: (error) => {

        console.log(error);
      }


    })

  }



}
