import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { CreatePatientComponent } from './create-patient/create-patient.component'

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientDetailComponent,
    CreatePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
