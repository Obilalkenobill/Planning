import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientDetailComponent} from './patient-detail/patient-detail.component'
import { PatientComponent } from './patient/patient.component';
import {CreatePatientComponent} from './create-patient/create-patient.component'

const appRoutes: Routes=[
  {
  path:'patientdetail/:id',component: PatientDetailComponent
},
{
  path:'patient',component: PatientComponent
},
{
  path:'patientcr', component:CreatePatientComponent
}
];
@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
