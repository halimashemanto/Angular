import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddDepartment } from './Department/add-department/add-department';
import { ViewDepartment } from './Department/view-department/view-department';
import { UpdateDepartment } from './Department/update-department/update-department';

import { Home } from './Department/home/home';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { Viewalldoctorname } from './viewalldoctorname/viewalldoctorname';
import { Addalldoctorname } from './addalldoctorname/addalldoctorname';
import { Updatealldoctorname } from './updatealldoctorname/updatealldoctorname';

@NgModule({
  declarations: [
    App,
    AddDepartment,
    ViewDepartment,
    UpdateDepartment,  
    Home,  Viewalldoctorname, Addalldoctorname, Updatealldoctorname
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  

  ],
  bootstrap: [App]
})
export class AppModule { }
