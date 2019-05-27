import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TacheComponent } from './tache/tache.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    CreatePatientComponent,
    SignInComponent,
    SignUpComponent,
    TacheComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule, FormsModule, HttpClientModule,ToastrModule.forRoot(),ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

}, )
export class AppModule { }
