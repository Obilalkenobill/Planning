
import { Component, OnInit, Output, Input } from '@angular/core';
import { AuthorizeService } from './service/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthorizeService]
})
export class AppComponent {
  constructor(public authorize: AuthorizeService) { }
Logout(){
  this.authorize.logout();
  location.reload();
  
}
    }
