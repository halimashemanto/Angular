import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUser } from './add-user/add-user';
import { Viewuser } from './viewuser/viewuser';
import { UpdateUser } from './update-user/update-user';
import { Home } from './home/home';

const routes: Routes = [
  {path:'',component:Home},
  {path:'addUser',component:AddUser},
  {path:'viewUser',component:Viewuser},
  {path:'',component:UpdateUser}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
