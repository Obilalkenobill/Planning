import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../service/authorize.service';

@Component({
  selector: 'app-create-infirmier',
  templateUrl: './create-infirmier.component.html',
  styleUrls: ['./create-infirmier.component.css']
})
export class CreateInfirmierComponent implements OnInit {
  model:infirmier={
    nom:"",
    prenom:"",
    isvalid:true
  };
    constructor(private router : Router, private http:HttpClient, public authorize: AuthorizeService) { 
    }
    ngOnInit() {
    }
    
  Post(nom,prenom){
    this.model.nom=nom;
    this.model.prenom=prenom;
    this.http.post("http://localhost:8010/infirmier",this.model).
    subscribe(data=>{this.router.navigate(['infirmier']);},
    err=>{alert(err)})
  }
  }
  export interface infirmier{
    nom:string;
    prenom:string;
    isvalid:Boolean;
  }
  