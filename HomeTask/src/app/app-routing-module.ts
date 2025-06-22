import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Newhomecomponent } from './newhomecomponent/newhomecomponent';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  
  {path: '', component:Newhomecomponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
