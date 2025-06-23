import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentModelModule { 

  id !: number;
  name !: string;
  email !: string;
  contactNo !: number;
}
