import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../../model/ReceptionistModel';
import { ReceptionistService } from '../../service/receptionist-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-receptionist',
  standalone: false,
  templateUrl: './view-receptionist.html',
  styleUrl: './view-receptionist.css'
})
export class ViewReceptionist  implements OnInit {
 reciptionist:any;
profile!: ReceptionistModel;

  constructor(private receptionistService: ReceptionistService,
      private  router : Router,
  private cdr : ChangeDetectorRef
  ) { }

  
  ngOnInit(): void {

      this.loadAllReciptionist();
      

  }

  loadAllReciptionist(){

    this.reciptionist = this.receptionistService. getReciptionist();

  }
 deleteReciptionist(id: string): void {
    this.receptionistService.deleteReciptionist(id).subscribe({
      next: () => {

        console.log("reciptionist deleted");
        this.loadAllReciptionist();
        this.cdr.reattach();
      },
      error: (err) => {
        console.log( err);
      }
    });
 
  }
}


  



  
