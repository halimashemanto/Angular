import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DepartmentService } from '../service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-department.html',
  styleUrl: './view-department.css'
})
export class ViewDepartment implements OnInit {
  departments:any;

constructor(
  private departmentService : DepartmentService,
  private router : Router,
  private cdr : ChangeDetectorRef){}


  ngOnInit(): void {

      this.loadAllDepartment();

  }

  loadAllDepartment(){

    this.departments = this.departmentService. getAllDepartment();
    console.log(this.departments.nameOfDepartment);

  }


   deleteDepartment(id: string): void {
    this.departmentService.deleteDepartment(id).subscribe({
      next: () => {

        console.log("Department deleted");
        this.loadAllDepartment();
        this.cdr.reattach();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



}