import { Component, OnInit } from '@angular/core';
import { HttpservicesService} from '../services/httpservices.service';
import { NavController } from '@ionic/angular';

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


  constructor(public http:HttpservicesService, public navCtr : NavController) { }

  ngOnInit() {
    this.http.getTrips().subscribe(
      http => this.user$ = http
    );
  }

getStops(user)
{
  let goTo = '/stops/' + user;
  this.navCtr.navigateForward(goTo);
  console.log(user);
}

}
