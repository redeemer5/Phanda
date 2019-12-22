import { Component, OnInit } from '@angular/core';
import {HttpservicesService} from '../services/httpservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stops',
  templateUrl: './stops.page.html',
  styleUrls: ['./stops.page.scss'],
})
export class StopsPage implements OnInit {

  user$:object;
  user:string;
  id:any;

  constructor
  (
    public http:HttpservicesService, 
    public router: Router, 
    public route: ActivatedRoute, 
    public navCtr : NavController
  ) 
  
  {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  des:number = 1;

  routerParam: any;

  ngOnInit() {
    this.http.getStops(this.id).subscribe(
      http => { this.user$ = http;
        console.log(http);
      }
    );
  }

  getRestaurants(user)
{
  let goTo = '/restaurants/' + user;
  this.navCtr.navigateForward(goTo);
  console.log(user);
}

}
