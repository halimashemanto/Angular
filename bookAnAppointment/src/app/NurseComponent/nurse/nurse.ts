import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NurseModel } from '../modelnurse/nurseModel';
import { NurseService } from '../nurse-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse',
  standalone: false,
  templateUrl: './nurse.html',
  styleUrl: './nurse.css'
})
export class Nurse  implements OnInit {
 nurse :any;

constructor(
  private nurseService : NurseService,
  private router: Router,
  private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadAllNuser();
  }
loadAllNuser(){

  this.nurse = this.nurseService.getNurse();
}
deleteUser(id:string):void{
  this.nurseService.deleteNurse(id).subscribe({

    next:(res)=>{
      this.loadAllNuser();
      this.router.navigate(['/n'])
      this.cdr.reattach();

    },
    error:(error)=>{
console.log(error);

    }

  });

}

}

