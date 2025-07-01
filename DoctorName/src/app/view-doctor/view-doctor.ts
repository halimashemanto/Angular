import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-doctor',
  standalone: false,
  templateUrl: './view-doctor.html',
  styleUrl: './view-doctor.css'
})
export class ViewDoctor implements OnInit{
  
  doctors:any;

constructor(private doctorService : DoctorService,
  private router : Router,
  private cdr : ChangeDetectorRef){}


  ngOnInit(): void {

      this.loadAllDoctorName();

  }

  loadAllDoctorName(){

    this.doctors = this.doctorService. getAllDoctorName();

  }


   deleteDoctorName(id: string): void {
    this.doctorService.deleteDoctorName(id).subscribe({
      next: () => {

        console.log("Doctor name deleted");
        this.loadAllDoctorName();
        this.cdr.reattach();
      },
      error: (err) => {
        console.log( err);
      }
    });
  }


  getDoctorNameById(id:string):void{

    this.doctorService.getDoctorNameById(id).subscribe({

      next:(res)=>{
        this.router.navigate(['/updateDoctor'])

      },
      error:(error)=> {

        console.log(error);
      }

    });

  }







}
