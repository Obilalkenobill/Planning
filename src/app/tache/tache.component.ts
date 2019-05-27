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
public curtask;
model:Tache={
  patients:[]
}
  constructor(private httpClient:HttpClient, public authorize: AuthorizeService) { }
  ngOnInit() {

    this.httpClient
    .get("http://localhost:8010/taches")
    .subscribe(data=>{this.listTaches=data})
  
  this.httpClient.get("http://localhost:8010/patients").subscribe(data=>{this.listpatient=data},err=>{console.log(err)})
  }
 
  Put(link: HTMLLinkElement,id){ 
   /* let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }*/
    let patientcur:patient={id:+link.id};
    this.model.patients.push(patientcur);
    this.curtask=id;
    console.log(this.curtask);
    this.httpClient.put("http://localhost:8010/taches/"+this.curtask,this.model).
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

