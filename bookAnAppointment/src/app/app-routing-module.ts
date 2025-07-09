import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { AddBook } from './Booking/add-book/add-book';
import { ViewBook } from './Booking/view-book/view-book';
import { UpdateBook } from './Booking/update-book/update-book';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { AboutHospital } from './about hospital/about-hospital/about-hospital';
import { AboutChairman } from './about hospital/about-chairman/about-chairman';
import { AboutManagingdirector } from './about hospital/about-managingdirector/about-managingdirector';

import { Contact } from './contact/contact';
import { ServiceFeatures } from './service-features/service-features';
import { HealthCheckUp } from './about hospital/health-check-up/health-check-up';
import { Nurse } from './NurseComponent/nurse/nurse';
import { UpdateNurse } from './NurseComponent/update-nurse/update-nurse';
import { AddNurse } from './NurseComponent/add-nurse/add-nurse';
import { AddPatient } from './patient/add-patient/add-patient';
import { ViewPatient } from './patient/view-patient/view-patient';
import { UpdatePatient } from './patient/update-patient/update-patient';
import { ListOfPatient } from './patient/list-of-patient/list-of-patient';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'home ', component: Home },
  { path: 'addBook', component: AddBook },
  { path: 'viewBook', component: ViewBook },
  { path: 'updateBook/:id', component: UpdateBook },
  { path: 'reg', component: Registration },
  { path: 'log', component: Login  },
  { path: 'aboutUs', component: AboutHospital  },
  { path: 'aboutC', component: AboutChairman  },
  { path: 'aboutMD', component: AboutManagingdirector  },
  { path: 'contact', component: Contact  },
  { path: 'service', component: ServiceFeatures  },
  { path: 'health', component: HealthCheckUp  },
  { path: 'an', component: AddNurse  },
  { path: 'n', component: Nurse  },
  { path: 'un', component: UpdateNurse  },
  { path: 'addpatient', component: AddPatient  },
  { path: 'viewpatient', component: ViewPatient  },
  { path: 'updatepatient/:id', component: UpdatePatient  },
  { path: 'patientlist', component: ListOfPatient },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
