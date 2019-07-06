    
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthorizeService } from 'src/app/service/authorize.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[AuthorizeService]
})
export class SignInComponent implements OnInit {
  user: User={
    username:'',
    password:"",
    roles:[]
  }
  isLoginError : boolean = false;
  constructor(private router : Router, public authoriser: AuthorizeService,private httpClient:HttpClient) { }
public isAuth:Boolean;
  ngOnInit() {
  }  
  
  OnSubmit(userName,password){

 this.httpClient.get("http://planback.herokuapp.com/user/getbyname/"+userName).
  subscribe(  (data:any) =>  {this.isAuth =(password == data.password) ; 
    if (this.isAuth) { this.user= new User(data.username, data.password,data.roles);console.log(this.isAuth)} },
  err=>{this.isAuth =(password == err.error.password) ; 
    if (this.isAuth){ this.user= new User(err.error.username, err.error.password,err.error.roles)};console.log(this.isAuth);
  if(this.isAuth){
    sessionStorage.
    setItem('security.user', JSON.stringify(this.user));
    this.authoriser.login(this.user); 
    location.reload();
    this.router.navigate(['']);
  
   
  } })
 /*
  this.user.username=userName;
  this.user.password=password;
  this.httpClient.get("http://localhost:8010/user/getbyname/"+userName).
  subscribe(  (data:any) =>{ this.user.roles=data.roles}, 
  err=>{ this.user.roles=err.error.roles} )
  this.httpClient.put("http://localhost:8010/user/verifpass",this.user).
  subscribe((data:boolean)=>{ if(data){this.authoriser.login(this.user);}},err=>console.log(err))
  */
  }
}
export class User {
  username: string;
  password: string;
  roles: Array<Role> = [{id:2,name:"ROLE_USER"}];


  constructor(username: string, password: string,  roles?:Array<Role>) {
    this.username = username;
    this.password = password;

    this.roles=roles;
  }
}

export class Role{
  id:number;
name:string;
constructor(Name:string)
{
  this.name=Name;
}
}

