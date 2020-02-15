import { PaypalPage } from './../paypal/paypal.page';
import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpservicesService } from '../services/httpservices.service';
//firestore
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";



declare let paypal:any;




@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, AfterViewChecked {

  
  convert:number;
  sum:number;

  //firestore declarations
  createSongForm: FormGroup;
  router: any;

  // array, total, and order number declaration
  selectedItems = [];
  total = 0;
  // orderNumber: number;
  orderNumber:number = Math.floor(Math.random() * 100);

  // hold current user and restaurant data
  userData: any = {};
  resData: any = {};
  

  constructor(private cartService: CartService,
    private http: HttpservicesService,private httpc:HttpClient,public alertController: AlertController,

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

  // go to paypal page with value
  NextPage() {

    const now = new Date();
    this.today = now.toISOString();
    // this.routerr.navigateByUrl('/paypal/' + this.total);
    let serverData = {
      // user side info
      date: this.today,
      name: this.userData.name,
      surname: this.userData.surname,
      cell:this.userData.cell,
      email: this.userData.email,
      
      // restuarant side info
      restuarant: this.resData.restaurant_name,
      restuarantno: this.resData.restaurant_phone_number,
      orderno: this.orderNumber.toString(),
      total: this.total,

      // to get what the user has orderd uncomment the code below

      // items: this.selectedItems      
    }
    this.http.postOrder(serverData).subscribe((response) =>{
    });    
  }


  ngOnInit() {
    this.getCartInfo();
  }

  
  getCartInfo()
  {
        // api call to convert the rates
        setInterval(() => {
          this.httpc.get<any>('https://api.exchangerate-api.com/v4/latest/USD')
        .subscribe(data => {
          this.convert = data.rates.ZAR;
          this.sum = this.total / this.convert;
          console.log(this.sum)
        });
        }, 10000)
        // api call to convert the rates
    
        // get pushed items from the array
        let items: any = this.cartService.getCart();
        // let selected = {};
        this.selectedItems = items;
        let price = 0;
        this.selectedItems.map((item) => price += item.item_price);
        this.total = price;
        
        // get pushed items from the array
  }

  // paypal code start
  addScript: boolean =false;
  paypalLoad:boolean = true;
  finalAmount: number;
  

  paypalConfig = {
    // env:  'production',
    // client:{
    //   sandbox:'Aeuh_e9M4o1YxR8ZXanPCLsPIxMeImL3KzTB9vvsGk9gR5ps1QqfmCeX3pn2iS_cGm8_4OizWQfSwvaM',
    //   production:'AaTKCd3x9c3LDRB0biM3GKq2FK9s13qI_2zL68BWGrQnZEgY1L2UHAYX1NLy5VhtcrZad7_kQAVj53Xe'
    // },
    // commit:true,
    payment: (data, actions) =>
    {
      return actions.payment.create({
        payment:{
          transactions:[
            {amount: {total: this.sum.toFixed(2),currency: 'USD'}}
          ]
        }
      });
    },

    onAuthorize: (data, actions) =>
    {
      return actions.payment.execute().then((payment) =>{
        // redirect user when the payment is done
        this.NextPage();
        this.presentAlert();
      })
    }
  };

ngAfterViewChecked():void{
  if(!this.addScript)
  {
    this.addPaypalScript().then(()=>{
      // paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn') // render the old yellow paypal button
      // paypal.Buttons().render( '#paypal-checkout-btn');


      let BillAmount:number = this.sum;
      paypal.Buttons({
        createOrder: function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: BillAmount,currency: 'USD'
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function(details) {
            // This function shows a transaction success message to your buyer.
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render( '#paypal-checkout-btn');

      this.paypalLoad = false;

    })
  }
}

  addPaypalScript()
  {
    this.addScript= true;
    return new Promise((resolve,reject)=>{
    let scripttagElement = document.createElement('script');
    // scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js'; // script element for old yellow paypal button
    // scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=sb';
    scripttagElement.src = 'https://www.paypal.com/sdk/js?client-id=AaTKCd3x9c3LDRB0biM3GKq2FK9s13qI_2zL68BWGrQnZEgY1L2UHAYX1NLy5VhtcrZad7_kQAVj53Xe';
    scripttagElement.onload = resolve;
    document.body.appendChild(scripttagElement);
    })
  }

  // paypal code end

  remove(product)
  {
    this.cartService.removeProduct(product);
    this.getCartInfo();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      subHeader: 'All done !',
      message: 'Your order has been accepted by the restaurant. See you soon.',
      buttons: ['OK']
    });

    await alert.present();
  }



  // async fireStoreUpload() {
  //   var loading = await this.loadingCtrl.create();
  //   loading.message = "Please wait !";

  //   var one: any = this.selectedItems;

  //   this.firestoreService
  //     .createSong(one)
  //     .then(
  //       () => {
  //         loading.dismiss().then(() => {
  //           // this.navCtrl.navigateForward("/home");
  //         });
  //       },
  //       error => {
  //         console.error(error);
  //       }
  //     );
  //   console.log(this.selectedItems);

  //   return await loading.present();

  // }

}
