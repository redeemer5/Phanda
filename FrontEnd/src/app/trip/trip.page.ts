import { Component, OnInit } from '@angular/core';
import { HttpservicesService} from '../services/httpservices.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.page.html',
  styleUrls: ['./trip.page.scss'],
})
export class TripPage implements OnInit {

  user$: Object;
  users: any;
  user: string;
  users$:Object;

  constructor(public http:HttpservicesService) { }

  ngOnInit() {
    this.http.getTrips().subscribe(
      http => this.user$ = http
    );
  }

}
