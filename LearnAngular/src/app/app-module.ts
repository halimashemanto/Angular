import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Home } from './home/home';
import { ViewAllDoctor } from './view-all-doctor/view-all-doctor';
import { AddDoctor } from './add-doctor/add-doctor';
import { EnterProcess } from './enter-process/enter-process';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDoctor } from './update-doctor/update-doctor';

@NgModule({
  declarations: [
    App,
    Home,
    ViewAllDoctor,
    AddDoctor,
    EnterProcess,
    UpdateDoctor
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
