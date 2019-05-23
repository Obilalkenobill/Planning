import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
listpatient;
  constructor(private httpClient:HttpClient) {
    this.httpClient.get("http://localhost:8010/patients").subscribe(data=>{this.listpatient=data;},err=>{console.log(err);})
   }
}
