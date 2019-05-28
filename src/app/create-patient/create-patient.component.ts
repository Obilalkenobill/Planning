import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { Router } from '@angular/router';
import { AuthorizeService } from '../service/authorize.service';
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
model:patient={
  nom:"",
  prenom:"",
  infirmier:{id:null},
  isvalid:true
};
@Input() public listinfirmier;
  constructor(private router : Router, private http:HttpClient, public authorize: AuthorizeService) { 
  }
  ngOnInit() {
    this.http.get("http://localhost:8010/infirmier").subscribe(data=>{this.listinfirmier=data},err=>{console.log(err)})
  }
  
Post(nom,prenom){
  this.model.nom=nom;
  this.model.prenom=prenom;
  this.http.post("http://localhost:8010/patients",this.model).
  subscribe(data=>{this.router.navigate(['patient']);},
  err=>{alert(err)})
}

manage(infId){
  console.log(infId);
  this.model.infirmier.id=infId;
}
}
export interface patient{
  nom:string;
  prenom:string;
  infirmier:infirmier;
  isvalid:Boolean;
}
export interface infirmier{
  id:number;
}
