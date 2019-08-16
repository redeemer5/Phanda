import { Component, OnInit } from '@angular/core';
import {HttpservicesService} from '../services/httpservices.service';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.page.html',
  styleUrls: ['./stops.page.scss'],
})
export class StopsPage implements OnInit {

  user$:object;
  user:string;

  constructor(public http:HttpservicesService) { }

  des:number = 1;

  ngOnInit() {
    
    this.http.getStops(this.des).subscribe(
      http => this.user$ = http
    );
  }

}
