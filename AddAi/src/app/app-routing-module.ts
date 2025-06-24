import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddStudent } from './add-student/add-student';
import { ViewAllStudent } from './view-all-student/view-all-student';

const routes: Routes = [

  {path:'', component:Home},
  {path:'allstu', component:AddStudent},
  {path:'viewstu', component:ViewAllStudent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
