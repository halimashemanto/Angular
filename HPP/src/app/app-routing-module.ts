import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddDoctor } from './DOCTOR/add-doctor/add-doctor';
import { AddNurse } from './NURSE/add-nurse/add-nurse';
import { AdminPower } from './ADMIN/admin-power/admin-power';
import { AddAdmin } from './ADMIN/add-admin/add-admin';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { User } from './auth/user/user';

const routes: Routes = [
  {path:'',component:Home},
  {path:'doctor',component:AddDoctor},
  {path:'addNurse',component:AddNurse},
  {path:'adminPower',component:AdminPower},
  {path:'addAdmin',component:AddAdmin},
  {path:'reg',component:Registration},
  {path:'login',component:Login},
  {path:'user',component:User},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
