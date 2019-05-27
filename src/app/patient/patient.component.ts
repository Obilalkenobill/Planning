import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorizeService } from '../service/authorize.service';


@Component({
  selector: 'app-pat',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
  providers:[AuthorizeService]
})
export class PatientComponent implements OnInit {
  @Input() listpatient;
  constructor(private httpClient:HttpClient, public authorize: AuthorizeService){
  }

  ngOnInit() {
    this.httpClient
    .get("http://localhost:8010/patients")
    .subscribe(data=>{this.listpatient=data})
  }
}
