import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  selectedid:number;
  pat: any;
  constructor(private httpClient:HttpClient, private route:ActivatedRoute) {
    
    this.route.params.subscribe(params => {this.selectedid = params['id']});
   }

  ngOnInit() {
    this.httpClient.get("http://localhost:8010/patients/" + this.selectedid).subscribe(data => {this.pat = data;},err=>{this.pat = err.error;} );
    console.log(this.pat);
   
  }
  }


