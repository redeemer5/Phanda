import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

declare let paypal:any;


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})


export class PaypalPage implements OnInit, AfterViewChecked {

  total:number;
  convert:number;
  sum:number;
  
  constructor(private route: ActivatedRoute,private http: HttpClient) {}
  

  ngOnInit() 
  {
    let amount = this.route.snapshot.paramMap.get('amount');
    this.total = +amount;

    // console.log(this.total)

    setInterval(() => {
      this.http.get<any>('https://api.exchangerate-api.com/v4/latest/USD')
    .subscribe(data => {
      this.convert = data.rates.ZAR;
      this.sum = this.total / this.convert;
     console.log(this.sum)
    });
    }, 10000)
  }

  addScript: boolean =false;
  paypalLoad:boolean = true;
  finalAmount: number;

  paypalConfig = {
    env:  'production',
    client:{
      sandbox:'Aeuh_e9M4o1YxR8ZXanPCLsPIxMeImL3KzTB9vvsGk9gR5ps1QqfmCeX3pn2iS_cGm8_4OizWQfSwvaM',
      production:'AaTKCd3x9c3LDRB0biM3GKq2FK9s13qI_2zL68BWGrQnZEgY1L2UHAYX1NLy5VhtcrZad7_kQAVj53Xe'
    },
    commit:true,
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
        let name="redeemer";
        console.log(name);
        
      })
    }
  };

ngAfterViewChecked():void{
  if(!this.addScript)
  {
    this.addPaypalScript().then(()=>{
      paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn')
      this.paypalLoad = false;
    })
  }
}

  addPaypalScript()
  {
    this.addScript= true;
    return new Promise((resolve,reject)=>{
    let scripttagElement = document.createElement('script');
    scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload = resolve;
    document.body.appendChild(scripttagElement);
    })
  }

}
