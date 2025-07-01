import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddUser } from './add-user/add-user';
import { UpdateUser } from './update-user/update-user';
import { Viewuser } from './viewuser/viewuser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Home } from './home/home';

@NgModule({
  declarations: [
    App,
    AddUser,
    UpdateUser,
    Viewuser,
    Home
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
