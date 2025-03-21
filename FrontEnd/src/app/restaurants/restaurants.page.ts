import { Component, OnInit } from '@angular/core';
import {HttpservicesService} from '../services/httpservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  user$:object;
  user:string;
  id: any;

  constructor(public http:HttpservicesService, public router: Router, public route: ActivatedRoute,public navCtr : NavController) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit() {
    this.http.getRestaurants(this.id).subscribe(
      http => { this.user$ = http;
        console.log(http);
      }
    );
  }

  getMenu(user)
  {
    let goTo = '/menu/' + user;
    this.navCtr.navigateForward(goTo);
    console.log(user);
  }

}
