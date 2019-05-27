import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/service/authorize.service';
import { User, Role } from '../user/user.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[]
})
export class SignUpComponent implements OnInit {
  user: User={
    username:'',
    password:"",
    roles:[{
      id:2,
      name:"ROLE_USER"
    }]
  }

  constructor(private toastr: ToastrService,private router : Router, public authoriser: AuthorizeService, private http:HttpClient) { }

  ngOnInit() {
    
  }

  OnSubmit(UserName,Password) {
    this.user.username=UserName;
    this.user.password=Password;
    this.http.post("http://localhost:8010/user",this.user)
      .subscribe(
        (data:any)=>
          {
          localStorage.setItem('userToken',data.user);
          this.toastr.success('User registration successful');
          this.authoriser.login(this.user);
         this.router.navigate(['']);
        }
        
      );
  }

  updateSelectedRoles(index) {
  
  }

}