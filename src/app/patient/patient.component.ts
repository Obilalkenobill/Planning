import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../service/authorize.service';


@Component({
  selector: 'app-pat',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers:[AuthorizeService]
})
export class PatientComponent implements OnInit {
  model:patient={
id:null,
 isvalid:true
  }
  @Input() listpatient:any;
  nbreDePat;

  indexx:number=0;
  somme:number=0;
   moyenne:number;
  constructor(private httpClient:HttpClient, public authorize: AuthorizeService){
  }

  ngOnInit() {
    this.httpClient
    .get("http://localhost:8010/patients")
    .subscribe(data=>{this.listpatient=data;this.nbreDePat=this.listpatient.length
  let nbreTacheTabl:[number]=[this.nbreDePat];
      this.listpatient.forEach(element => {
       this.somme=element.taches.length+this.somme;
       this.indexx++;
      });
    this.moyenne=this.somme/this.indexx;
    this.moyenne=Math.round(this.moyenne+0.5);
    })     
}
  Del(PatId:number){
    this.model.isvalid=false;
    this.model.id=PatId;
    this.httpClient.put("http://localhost:8010/patients/"+PatId,this.model).
    subscribe(data=>{location.reload()},
    err=>{alert(err)})
  }
}
export interface patient{
  id:number;
  isvalid:Boolean;
}
