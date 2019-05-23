import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pat',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {
  @Input() listpatient;
  constructor(private httpClient:HttpClient){
  }

  ngOnInit() {
    this.httpClient
    .get("http://localhost:8010/patients")
    .subscribe(data=>{this.listpatient=data})
  }
}
