import { PaypalPage } from './../paypal/paypal.page';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {HttpservicesService} from '../services/httpservices.service';
//firestore
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  //firestore declarations
  createSongForm: FormGroup;
  router: any;

  // array, total, and order number declaration
  selectedItems = [];
  total = 0;
  orderNumber: number;
 
  constructor(private cartService: CartService,
              private http:HttpservicesService,

              //firestore
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public firestoreService: FirestoreService,
              public navCtrl: NavController,
              formBuilder: FormBuilder,
              private routerr: Router
              
              ) {}

  
    // go to paypal page with value
    NextPage()
    {
      this.routerr.navigateByUrl('/paypal/' + this.total);
    }
 
  ngOnInit() {
    
    let items:any = this.cartService.getCart();
   // let selected = {};
    this.selectedItems = items;
    let price = 0;
    this.selectedItems.map((item) => price += item.item_price );
    this.total = price;

    this.orderNumber = Math.floor(Math.random()*100);

  }

  async fireStoreUpload()
  {
    var loading = await this.loadingCtrl.create();
    loading.message = "Please wait !";

    var one:any = this.selectedItems;

    this.firestoreService
    .createSong(one)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.navCtrl.navigateForward("/home");
        });
      },
      error => {
        console.error(error);
      }
    );
    console.log(this.selectedItems);

  return await loading.present();

  }

  }
