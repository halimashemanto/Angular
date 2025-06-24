import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentModel { 

  id !: number;
  name !: string;
  email !: string;
  contactNo !: number;
}
