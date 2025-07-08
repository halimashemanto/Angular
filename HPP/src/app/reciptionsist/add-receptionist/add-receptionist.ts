import { Component, OnInit } from '@angular/core';
import { ReceptionistService } from '../../service/receptionist-service';
import { ReceptionistModel } from '../../model/ReceptionistModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-receptionist',
  standalone: false,
  templateUrl: './add-receptionist.html',
  styleUrl: './add-receptionist.css'
})
export class AddReceptionist implements OnInit {


  reciptionistGroup !: FormGroup;

  constructor(private reciptionistService: ReceptionistService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.reciptionistGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      gender: [''],
      photo: [''],
      employeeId: [''],
      position: [''],
      department: [''],
      workHours: [''],
      role:['']

    });

  }
  
  addReciptionist(): void {

    const reciptionist = { ...this.reciptionistGroup.value };
    this.reciptionistService.saveReciptionistName(reciptionist).subscribe({

      next: (res) => {
  
        console.log("Saved Reciptionist name", res);
        this.reciptionistGroup.reset();
        this.router.navigate(['/viewRec']);

      },

      error: (error) => {
        console.log(error);
      }

    })

    


  }
}