import {Injectable} from '@angular/core';
import {Role, User} from '../models/security.models';

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
    return this.user != null;
  }
  isAdmin(){
    return this.user && this.user.roles.find(r => r == Role.Admin) != null || false;
  }
}
