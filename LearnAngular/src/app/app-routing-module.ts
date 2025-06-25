import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddDoctor } from './add-doctor/add-doctor';
import { ViewAllDoctor } from './view-all-doctor/view-all-doctor';
import { EnterProcess } from './enter-process/enter-process';
import { UpdateDoctor } from './update-doctor/update-doctor';

const routes: Routes = [
  
  {path:'', component:Home},
  {path:'addDoctor',component:AddDoctor},
  {path:'viewDoctor',component:ViewAllDoctor},
   {path:'updateDoctor/:id',component:UpdateDoctor}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
