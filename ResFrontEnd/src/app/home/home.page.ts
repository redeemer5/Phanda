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

  total = 0;


  ngOnInit()
  {
    
    this.firestoreService.getOrderList().valueChanges().subscribe(data => {
      this.orderList = data;
      console.log(data);
      
    });

  }
  

}
