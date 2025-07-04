import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { AddAdmin } from './ADMIN/add-admin/add-admin';
import { AddDoctor } from './DOCTOR/add-doctor/add-doctor';
import { AddNurse } from './NURSE/add-nurse/add-nurse';
import { AddReceptionist } from './add-receptionist/add-receptionist';
import { AddPatients } from './add-patients/add-patients';
import { AddLab } from './add-lab/add-lab';
import { AdminPower } from './ADMIN/admin-power/admin-power';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { User } from './auth/user/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Logout } from './auth/logout/logout';

@NgModule({
  declarations: [
    App,
    Home,
    AddAdmin,
    AddDoctor,
    AddNurse,
    AddReceptionist,
    AddPatients,
    AddLab,
    AdminPower,
    Registration,
    Login,
    User,
    Logout
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
