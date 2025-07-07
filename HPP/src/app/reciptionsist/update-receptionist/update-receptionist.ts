import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from '../../service/receptionist-service';
import { Router } from '@angular/router';
import { ReceptionistModel } from '../../model/ReceptionistModel';

@Component({
  selector: 'app-update-receptionist',
  standalone: false,
  templateUrl: './update-receptionist.html',
  styleUrl: './update-receptionist.css'
})
export class UpdateReceptionist implements OnInit {
  profile!: ReceptionistModel;

  constructor(private reciptionistService: ReceptionistService,
     private router: Router) { }

  ngOnInit(): void {
    this.getReciptionist();
  }

  getReciptionist(): void {
    this.reciptionistService.getReciptionist().subscribe((data: ReceptionistModel) => {
      this.profile = data;
    });
  }

  updateReciptionist(): void {
    this.reciptionistService.updateReciptionist(this.profile).subscribe(() => {
      this.router.navigate(['rec']);
    });
  }
}