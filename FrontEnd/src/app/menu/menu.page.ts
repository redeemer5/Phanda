import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { HttpservicesService} from '../services/httpservices.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  user$: Object;
  users: any;
  user: string;
  users$:Object;
  id: any;


  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService,private http: HttpservicesService, public route: ActivatedRoute) 
  { 
    this.id = this.route.snapshot.paramMap.get('id');
  }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    
    this.http.getMenu(this.id).subscribe(
      http => this.user$ = http
    );
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

}
