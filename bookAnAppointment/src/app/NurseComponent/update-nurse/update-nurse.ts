import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NurseModel } from '../modelnurse/nurseModel';
import {  ActivatedRoute, Router } from '@angular/router';
import { NurseService } from '../nurse-service';

@Component({
  selector: 'app-update-nurse',
  standalone: false,
  templateUrl: './update-nurse.html',
  styleUrl: './update-nurse.css'
})
export class UpdateNurse implements OnInit {
 
  id: string = '';
  nm!: NurseModel;

  constructor(private nurseService: NurseService,
     private router: Router,
    private route: ActivatedRoute,
  private cdr:ChangeDetectorRef) { }

   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadNurseById();
     console.log(this.nm);
 
    }

  loadNurseById() {

    this.nurseService.getNurse().subscribe({
      next: (res) => {
        this.nm = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // updateNurse(nm:NurseModel): void {
  //   this.nurseService.updateProfile().subscribe({

  //     next: () => {
  //       this.router.navigate(['/n'])

  //     },


  //     error: err => {
  //       console.error(err);
  //     }
  //   });
  // }




}