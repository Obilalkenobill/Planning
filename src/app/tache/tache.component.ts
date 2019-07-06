import { Component, OnInit, Input } from '@angular/core';
import { AuthorizeService } from '../service/authorize.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
listTaches:any;
@Input() public listpatient:any;
model:Tache={
  patients:[]
}
modelo: Patient={
  taches:[]
}
  constructor(private httpClient:HttpClient, public authorize: AuthorizeService) { }
  ngOnInit() {

    this.httpClient
    .get("http://planback.herokuapp.com/taches")
    .subscribe(data=>{this.listTaches=data})
  
  this.httpClient.get("http://planback.herokuapp.com/patients").subscribe(data=>{this.listpatient=data},err=>{console.log(err)})
  }
 
  Put(PatId:number,Taskid:number){ 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
    let patientcur:patient={id:+PatId};
    this.model.patients.push(patientcur);
    this.httpClient.put("http://planback.herokuapp.com/taches/"+Taskid,this.model,options).
    subscribe(data=>{location.reload()},err=>{alert(err)})

  }

  Delete(PatId,TaskId){
    this.httpClient.put("http://planback.herokuapp.com/taches/deletePatinTask/"+TaskId,PatId).
    subscribe(data=>{location.reload()},
    err=>{alert(err)})
  }
  


}
export class Tache{
  
  patients:Array<patient>;
}
export class patient{
  id:number;
}
export class Patient{
  taches:Array<tache>;
}
export class tache{
  id:number;
}
