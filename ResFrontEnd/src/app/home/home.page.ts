import { Component, OnInit } from '@angular/core';
import {FirestoreService} from '../service/firestore.service'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public orderList;


  constructor(private firestoreService: FirestoreService) {}


  ngOnInit()
  {
    this.orderList = this.firestoreService.getOrderList().valueChanges();
  }
  

}
