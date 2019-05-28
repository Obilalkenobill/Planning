import {Injectable} from '@angular/core';
import { User,Role } from '../user/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  private user: User;
  get User(): User { return this.user; }

  constructor() {
    this.user = JSON.parse(sessionStorage.getItem('security.user'));
  }

  login(user: User){
    this.user = user;
  }
  logout(){
    this.user = null;
    sessionStorage.clear();
  }

  isAuthenticate(){
    let bool: Boolean;
    if (this.user != null){bool=true}else{bool=false}
    return bool;
  }
  isAdmin(){
    let rolee:Role=new Role ("ROLE_ADMIN");
    let bool: Boolean=false;
    this.user.roles.forEach(t => {
    if(t.name==rolee.name){bool=true}
    });
    return bool ;
  }
  isUser(){
    let rolee:Role=new Role ("ROLE_USER");
    let bool: Boolean=false;
    this.user.roles.forEach(t => {
    if(t.name==rolee.name){bool=true}
    });
    return bool ;
  }
}
