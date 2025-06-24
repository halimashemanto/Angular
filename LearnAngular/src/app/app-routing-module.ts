import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddDoctor } from './add-doctor/add-doctor';
import { ViewAllDoctor } from './view-all-doctor/view-all-doctor';
import { EnterProcess } from './enter-process/enter-process';

const routes: Routes = [
  
  {path:'', component:Home},
  {path:'addDoctor',component:AddDoctor},
  {path:'viewDoctor',component:ViewAllDoctor}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
