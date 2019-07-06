import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../service/authorize.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  selectedid:number;
  pat: any;
  constructor(private httpClient:HttpClient, private route:ActivatedRoute, public authorize: AuthorizeService) {
    
    this.route.params.subscribe(params => {this.selectedid = params['id']});
   }

  ngOnInit() {
    this.httpClient.get("http://planback.herokuapp.com/patients/" + this.selectedid).subscribe(data => {this.pat = data;},err=>{this.pat = err.error;} );
    console.log(this.pat);
   
  }
  }


