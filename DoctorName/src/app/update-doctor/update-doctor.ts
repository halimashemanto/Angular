import { ChangeDetectorRef, Component } from '@angular/core';
import { DoctorName } from '../model/doctorName';
import { DoctorService } from '../service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-doctor',
  standalone: false,
  templateUrl: './update-doctor.html',
  styleUrl: './update-doctor.css'
})
export class UpdateDoctor {

    id: string = '';
  doctorName: DoctorName= new DoctorName();

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadBookById();
     console.log(this.doctorName);

  }

  

  loadBookById() {

    this.doctorService.getDoctorNameById(this.id).subscribe({
      next: (res) => {
        this.doctorName = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateDoctorName(): void {
    this.doctorService.updateDoctorName(this.id, this.doctorName).subscribe({

      next: () => {
        this.router.navigate(['/viewDoctor'])

      },


      error: err => {
        console.error(err);
      }
    });
  }

}
