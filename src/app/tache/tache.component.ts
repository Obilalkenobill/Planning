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
    .get("http://localhost:8010/taches")
    .subscribe(data=>{this.listTaches=data})
  
  this.httpClient.get("http://localhost:8010/patients").subscribe(data=>{this.listpatient=data},err=>{console.log(err)})
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
    this.httpClient.put("http://localhost:8010/taches/"+Taskid,this.model,options).
    subscribe(data=>{location.reload()},err=>{alert(err)})
    setTimeout(()=>this.Put2(PatId,Taskid), 5000)

  }
 public Put2(PatId:number,TaskId:number){
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
 });
 let options = {
    headers: headers
 }
  let taskcurr:tache={id:TaskId};
      this.modelo.taches.push(taskcurr);
      this.httpClient.put("http://localhost:8010/patients/"+PatId,this.modelo,options).
    subscribe(data=>{location.reload()},
      err=>{alert(err)})
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  }

  Delete(PatId,TaskId){
    this.httpClient.put("http://localhost:8010/taches/deletePatinTask/"+TaskId,PatId).
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
