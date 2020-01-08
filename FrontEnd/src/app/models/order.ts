import { PaypalPage } from './../paypal/paypal.page';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpservicesService } from '../services/httpservices.service';
//firestore
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



export class Order {


    userData: any = {};
    resData: any = {};

    constructor(private cartService: CartService,
        private http: HttpservicesService,
    
        //firestore
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public firestoreService: FirestoreService,
        public navCtrl: NavController,
        formBuilder: FormBuilder,
        private routerr: Router
    
      ) {
    
        if (localStorage.getItem('userData') !== undefined) {
          this.userData = JSON.parse(localStorage.getItem('userData'));
        }
    
        if (localStorage.getItem('resData') !== undefined) {
          this.resData = JSON.parse(localStorage.getItem('resData'));
        }
      }

      today;
      getInfo()
      {
        
      let serverData = {
        // user side info
        date: this.today,
        name: this.userData.name,
        surname: this.userData.surname,
        cell:this.userData.cell,
        email: this.userData.email,
        
        // restuarant side info
        resName: this.resData.restaurant_name,
        resNo: this.resData.restaurant_phone_number,
        // orderNo: this.orderNumber,
        total: this.total,
        // items: this.selectedItems      
      }
      }


    orid:number;
    name:string = this.userData.name;
    surname:string = this.userData.surname;
    cell:string = this.userData.cell;
    email:string = this.userData.email;
    restuarant:string = this.resData.restaurant_name;
    restuarantno:string = this.resData.restaurant_phone_number;
    orderno:number = 5;
    total:number = 12;
}
