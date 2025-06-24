import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModelModule {

  id !: number;
  name !: string;
  email !: string;
  salary !: number;

 }
