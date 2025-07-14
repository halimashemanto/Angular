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

import { Contact } from './about hospital/contact/contact';
import { ServiceFeatures } from './about hospital/service-features/service-features';
import { HealthCheckUp } from './about hospital/health-check-up/health-check-up';
import { Nurse } from './NurseComponent/nurse/nurse';
import { UpdateNurse } from './NurseComponent/update-nurse/update-nurse';
import { AddNurse } from './NurseComponent/add-nurse/add-nurse';
import { AddPatient } from './patient/add-patient/add-patient';
import { ViewPatient } from './patient/view-patient/view-patient';
import { UpdatePatient } from './patient/update-patient/update-patient';

import { DepartmentName } from './dropdown/department-name/department-name';
import { Addreciptionist } from './Reciptionist/addreciptionist/addreciptionist';
import { Viewreciptionist } from './Reciptionist/viewreciptionist/viewreciptionist';
import { Updatereciptionist } from './Reciptionist/updatereciptionist/updatereciptionist';
import { AddDoctorComponent } from './dropdown/add-doctor-component/add-doctor-component';
import { ViewDoctorComponent } from './dropdown/view-doctor-component/view-doctor-component';
import { UpdateDoctorComponent } from './dropdown/update-doctor-component/update-doctor-component';
import { Equipment } from './about hospital/equipment/equipment';
import { AddBill } from './BillingProcss/add-bill/add-bill';
import { AddPrescription } from './Prescription/add-prescription/add-prescription';
import { ViewPrescription } from './Prescription/view-prescription/view-prescription';
import { ViewBill } from './BillingProcss/view-bill/view-bill';
import { UpdatePrescription } from './Prescription/update-prescription/update-prescription';
import { AddReport } from './Report/add-report/add-report';
import { ViewReport } from './Report/view-report/view-report';
import { UpdateReport } from './Report/update-report/update-report';
import { AddScheduleSlotComponent } from './Appoinment/add-schedule-slot-component/add-schedule-slot-component';
import { AddAppointmentComponent } from './Appoinment/add-appointment-component/add-appointment-component';
import { Facility } from './facility/facility';
import { Navbar } from './templet/navbar/navbar';
import { Sidebar } from './templet/sidebar/sidebar';
import { Footer } from './templet/footer/footer';


const routes: Routes = [
  { path: '', component: Home },
  { path: 'home ', component: Home },

  // book an appoinment
  { path: 'addBook', component: AddBook },
  { path: 'viewBook', component: ViewBook },
  { path: 'updateBook/:id', component: UpdateBook },

  // auth
  { path: 'reg', component: Registration },
  { path: 'log', component: Login  },

  // about hospital
  { path: 'aboutUs', component: AboutHospital  },
  { path: 'aboutC', component: AboutChairman  },
  { path: 'aboutMD', component: AboutManagingdirector  },
  { path: 'service', component: ServiceFeatures  },
  { path: 'health', component: HealthCheckUp  },
  { path: 'contact', component: Contact  },
  { path: 'eq', component: Equipment  },

  // nurse
  { path: 'an', component: AddNurse  },
  { path: 'n', component: Nurse  },
  { path: 'un/:id', component: UpdateNurse  },

  // patient
  { path: 'addp', component: AddPatient  },
  { path: 'viewp', component: ViewPatient  },
  { path: 'up/:id', component: UpdatePatient  },
  
  // Doctor/Department

  { path: 'dep', component:DepartmentName },
  { path: 'editDepartment', component:DepartmentName },
  { path: 'adddoc', component:AddDoctorComponent },
  { path: 'viewdoc', component:ViewDoctorComponent },
  { path: 'edit-doctor/:id', component:UpdateDoctorComponent },

  //Reciptionsist
  { path: 'rec', component:Addreciptionist  },
  { path: 'viewrec', component:Viewreciptionist },
  { path: 'uprec', component:Updatereciptionist  },

  // Invoice
  { path: 'addbill', component:AddBill  },
  { path: 'viewbill', component:ViewBill  },
 
   // Prescription
  { path: 'addprescription', component:AddPrescription  },
  { path: 'viewprescription', component:ViewPrescription  },
  { path: 'upprescription/:id', component:UpdatePrescription  },
 
     // Report
  { path: 'addreport', component:AddReport  },
  { path: 'viewreport', component:ViewReport  },
  { path: 'upreport/:id', component:UpdateReport  },
  //appointment
  { path: 'addslot', component:AddScheduleSlotComponent  },
  { path: 'addapp', component:AddAppointmentComponent  },

  // admin Templet
  { path: 'f', component:Facility  },
  { path: 'anavbar', component:Navbar  },
  { path: 'sideber', component:Sidebar  },
  { path: 'footer', component:Footer  },
  

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
