import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsComponent } from '../pages/about-us/about-us.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { BrandsComponent } from '../pages/brands/brands.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { ShippingDeliveryComponent } from '../pages/shipping-delivery/shipping-delivery.component';
import { AgzzaAppComponent } from './blocks/agzza-app/agzza-app.component';
import { BreadcrumbsComponent } from './blocks/breadcrumbs/breadcrumbs.component';
import { FloatCartComponent } from './blocks/float-cart/float-cart.component';
import { PaginatorComponent } from './blocks/paginator/paginator.component';
import { ProductItemComponent } from './blocks/product-item/product-item.component';
import { ProductCartComponent } from './blocks/product-cart/product-cart.component';
import { StepperComponent } from './blocks/stepper/stepper.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    AuthComponent,
    BrandsComponent,
    ForgotPasswordComponent,
    PrivacyPolicyComponent,
    ShippingDeliveryComponent,
    AgzzaAppComponent,
    BreadcrumbsComponent,
    FloatCartComponent,
    PaginatorComponent,
    ProductCartComponent,
    ProductItemComponent,
    StepperComponent,
    FooterComponent 
  ],
  imports: [
    CommonModule
  ],
  exports:[  
      FooterComponent 
  ]
})
export class SharedModule { }
