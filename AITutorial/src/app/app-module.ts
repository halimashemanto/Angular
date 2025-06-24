import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './home-component/home-component';
import { AllEmployee } from './all-employee/all-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { ViewAllEmployee } from './view-all-employee/view-all-employee';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    AllEmployee,
    UpdateEmployee,
    ViewAllEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
