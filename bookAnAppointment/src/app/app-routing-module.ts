import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddBook } from './Booking/add-book/add-book';
import { ViewBook } from './Booking/view-book/view-book';
import { UpdateBook } from './Booking/update-book/update-book';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
<<<<<<< Updated upstream
=======
import { UserProfile } from './auth/user-profile/user-profile';
import { AboutHospital } from './about hospital/about-hospital/about-hospital';
import { AboutChairman } from './about hospital/about-chairman/about-chairman';
import { AboutManagingdirector } from './about hospital/about-managingdirector/about-managingdirector';
>>>>>>> Stashed changes

const routes: Routes = [
  { path: '', component: Home },
  { path: 'home ', component: Home },
  { path: 'addBook', component: AddBook },
  { path: 'viewBook', component: ViewBook },
  { path: 'updateBook/:id', component: UpdateBook },
  { path: 'reg', component: Registration },
<<<<<<< Updated upstream
  { path: 'log', component: Login  }
=======
  
  { path: 'login', component:Login},
  { path: 'userprofile', component:UserProfile},

    { path: 'aboutUs', component:AboutHospital},
    { path: 'aboutC', component:AboutChairman},
    { path: 'aboutMD', component:AboutManagingdirector},


>>>>>>> Stashed changes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
