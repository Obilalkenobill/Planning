import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';
@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
model:patient={
  nom:"",
  prenom:"",
  infirmier:{id:null}
};
@Input() public listinfirmier;
  constructor(private http:HttpClient) { 
  }
  ngOnInit() {
    this.http.get("http://localhost:8010/infirmier").subscribe(data=>{this.listinfirmier=data},err=>{console.log(err)})
  }
  
Post(nom,prenom){
  this.model.nom=nom;
  this.model.prenom=prenom;
  this.http.post("http://localhost:8010/patients",this.model).
  subscribe(data=>{location.reload()},
  err=>{alert(err)})
}

manage(link: HTMLLinkElement){
  console.log(link.id);
  this.model.infirmier.id=+link.id;
}
}
export interface patient{
  nom:string;
  prenom:string;
  infirmier:infirmier;
}
export interface infirmier{
  id:number;
}
