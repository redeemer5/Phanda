import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user$: any[];
  users: any;
  user: string;
  users$: Object;

  constructor(public httpCall: ApiService, public navCtrl:NavController
    ) { }

  ngOnInit() {
  }

  // start variables //
  name;
  email;
  ErrorMessage;
  // end variables //

  // methods
  Login() {
    this.httpCall.getNameAndPassword(this.name, this.email).subscribe(async (httpCall: any) => {
      this.user$ = await httpCall;
      // console.log(this.user$);

      if (this.user$.length > 0) {
        // navigate to the next page
        this.navCtrl.navigateForward('/dashboard')

        // saves user data on the local storage
        localStorage.setItem('userData', JSON.stringify(this.user$[0]));
      } else {
        this.ErrorMessage = 'Username or password incorrect';
      }

    });


  }
}
