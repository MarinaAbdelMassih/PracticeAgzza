import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutStepperComponent } from './checkout-stepper/checkout-stepper.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';


@NgModule({
  declarations: [CheckoutComponent, CheckoutStepperComponent, PaymentComponent, ConfirmationComponent, ShippingInformationComponent, ShoppingCartComponent, CartItemComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
