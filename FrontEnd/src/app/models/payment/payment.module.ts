import { PaymentService } from './../../services/payment.service';
import { MakePaymentComponent } from './../../make-payment/make-payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: 
  [
    MakePaymentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
