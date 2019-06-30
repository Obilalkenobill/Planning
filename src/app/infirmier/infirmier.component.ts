import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../service/authorize.service';

@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
model:infirmier={
  id:null,
  isvalid:true
}

      @Input() listinfirmier;
      constructor(private httpClient:HttpClient, public authorize: AuthorizeService){
      }
    
      ngOnInit() {
        this.httpClient
        .get("http://localhost:8010/infirmier")
        .subscribe(data=>{this.listinfirmier=data})
      }
      Del(infId:number){
        this.model.isvalid=false;
        this.model.id=infId;
        this.httpClient.put("http://localhost:8010/infirmier/"+infId,this.model).
        subscribe(data=>{location.reload()},
        err=>{alert(err)})
      }
    }
    export interface infirmier{
      id:number,
      isvalid:boolean
    }
    