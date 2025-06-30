import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctorname } from '../service/doctorname';

@Component({
  selector: 'app-viewalldoctorname',
  standalone: false,
  templateUrl: './viewalldoctorname.html',
  styleUrl: './viewalldoctorname.css'
})
export class Viewalldoctorname implements OnInit{

   doctor: any;

  constructor(private doctorService: Doctorname,
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
