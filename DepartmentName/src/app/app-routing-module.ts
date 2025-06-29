import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './Department/home/home';
import { AddDepartment } from './Department/add-department/add-department';
import { ViewDepartment } from './Department/view-department/view-department';
import { UpdateDepartment } from './Department/update-department/update-department';

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
