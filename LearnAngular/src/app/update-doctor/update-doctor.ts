import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Doctor } from '../../model/doctor';
import { DoctorServiceService } from '../service/doctor-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';


@Component({
  selector: 'app-update-doctor',
  standalone: false,
  templateUrl: './update-doctor.html',
  styleUrl: './update-doctor.css'
})
export class UpdateDoctor implements OnInit {

  id: string = '';
  doctor: Doctor = new Doctor();

  constructor(
    private doctorService: DoctorServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.lodeDoctorById();
  }

  lodeDoctorById() {

    this.id = this.route.snapshot.params['id'];

    this.doctorService.getDoctorById(this.id).subscribe({
      next: (res) => {
        this.doctor = (res);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.log(error);
      }
    })

  }
  
  }



