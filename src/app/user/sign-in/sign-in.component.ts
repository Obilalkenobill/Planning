    
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user/user.component';
import { AuthorizeService } from 'src/app/service/authorize.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers:[AuthorizeService]
})
export class SignInComponent implements OnInit {
  
  isLoginError : boolean = false;
  constructor(private router : Router, public authoriser: AuthorizeService,private httpClient:HttpClient, private route:ActivatedRoute) { }
public user:any;
public isAuth:Boolean;
public isLog:Boolean;
  ngOnInit() {
  }  
  
  OnSubmit(userName,password){

  this.httpClient.get("http://localhost:8010/user/getbyname/"+userName).
  subscribe(  (data:any) =>  {this.isAuth =(password == data.password) ; if (this.isAuth) { this.user= new User(data.username, data.password,data.roles);console.log(this.isAuth)} },
  err=>{this.isAuth =(password == err.error.password) ; if (this.isAuth){ this.user= new User(err.error.username, err.error.password,err.error.roles)};console.log(this.isAuth);
  if(this.isAuth){
    sessionStorage.
    setItem('security.user', JSON.stringify(this.user));
    this.authoriser.login(this.user);
    this.isLog=this.authoriser.isAuthenticate();
    this.router.navigate(['']);
    location.reload();
  } })

  }

  }

