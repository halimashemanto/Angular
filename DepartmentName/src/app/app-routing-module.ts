import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { AddDepartment } from './add-department/add-department';
import { ViewDepartment } from './view-department/view-department';
import { UpdateDepartment } from './update-department/update-department';

const routes: Routes = [
{path:'', component:Home},
            
{path:'addDep', component:AddDepartment},
{path:'viewDep', component:ViewDepartment},
{path:'updateDep', component:UpdateDepartment}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
