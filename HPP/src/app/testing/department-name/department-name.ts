import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DrpartmentService } from '../../service/drpartment-service';
import { DepartmentModel } from '../../model/departmentModel';

@Component({
  selector: 'app-department-name',
  standalone: false,
  templateUrl: './department-name.html',
  styleUrl: './department-name.css'
})
export class DepartmentName implements OnInit {
  
  departmentModel: DepartmentModel[] = [];
  depForm: FormGroup;
  editing: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private departmentService: DrpartmentService ,
   private cdr:ChangeDetectorRef){
  
    this.depForm = this.formBuilder.group({
      id: [''],
      dname: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadDepartment();
  }

  loadDepartment() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departmentModel= data;
    });
  }

  onSubmit() {
  if (this.depForm.invalid) return;

  if (this.editing) {
    this.departmentService.updateDepartment(this.depForm.value).subscribe(() => {
      alert('Updated successfully!');
      this.loadDepartment();
      this.cancelEdit();
    });
  } else {
    const { dname } = this.depForm.value; 
    this.departmentService.addDepartment({ dname }).subscribe(() => {
      alert('Added successfully!');
      this.loadDepartment();
      this.depForm.reset();
       this.cdr.reattach();
      this.editing = false;
    });
  }
}

  editDepartment(dep: DepartmentModel) {
    this.editing = true;
    this.depForm.patchValue({
      id: dep.id,
      name: dep.dname
    });
  }

  deleteDepartment(id: string ) {
    if (confirm('Are you sure?')) {
      this.departmentService.deleteDepartment(id).subscribe(() => {
        alert('Deleted!');
        this.loadDepartment();
      });
    }
  }

  cancelEdit() {
    this.editing = false;
    this.depForm.reset();
  }
}
