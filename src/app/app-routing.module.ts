import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientDetailComponent} from './patient-detail/patient-detail.component'
import { PatientComponent } from './patient/patient.component';
import {CreatePatientComponent} from './create-patient/create-patient.component'
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { TacheComponent } from './tache/tache.component';

const appRoutes: Routes=[
  {
  path:'patientdetail/:id',component: PatientDetailComponent, //canActivate:['ADMIN']
},
{
  path:'patient',component: PatientComponent, //canActivate:['USER']
},
{
  path:'patientcr', component:CreatePatientComponent, //canActivate:['ADMIN']
},
{
  path:'connexion', component:SignInComponent
},
{
  path:'inscription', component:SignUpComponent
},
{
  path:'taches', component:TacheComponent
}
];
@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
