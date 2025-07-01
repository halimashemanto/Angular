import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddDoctor } from './add-doctor/add-doctor';
import { ViewDoctor } from './view-doctor/view-doctor';
import { UpdateDoctor } from './update-doctor/update-doctor';

const routes: Routes = [
  {path:'', component:Home},
  {path:'home', component:Home},
  {path:'addDoctor', component:AddDoctor},
  {path:'viewDoctor', component:ViewDoctor},
  {path:'updateDoctor:/id', component:UpdateDoctor}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
