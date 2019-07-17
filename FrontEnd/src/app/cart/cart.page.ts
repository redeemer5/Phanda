import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import {HttpservicesService} from '../services/httpservices.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectedItems = [];
  total = 0;
  orderNumber: number;
 
  constructor(private cartService: CartService,private http:HttpservicesService) { }
 
  ngOnInit() {
    
    let items:any = this.cartService.getCart();
   // let selected = {};
    this.selectedItems = items;
    let price = 0;
    this.selectedItems.map((item) => price += item.price );
    this.total = price;

    this.orderNumber = Math.floor(Math.random()*100);
  }

  }
