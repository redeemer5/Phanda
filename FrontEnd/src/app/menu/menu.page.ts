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

  res$:any[];

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

    this.getResInfo();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  
  }
 
  openCart() {
    this.router.navigate(['cart']);
  }

  getResInfo()
  {
    this.http.getResInfo(this.id).subscribe( async (httpCall: any) =>{
      this.res$ = await httpCall;  
      localStorage.setItem('resData',JSON.stringify(this.res$));
    });
  }
}
