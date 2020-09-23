import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AuthComponent } from './pages/auth/auth.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ShippingDeliveryComponent } from './pages/shipping-delivery/shipping-delivery.component';
import { AgzzaAppComponent } from './shared/blocks/agzza-app/agzza-app.component';
import { BreadcrumbsComponent } from './shared/blocks/breadcrumbs/breadcrumbs.component';
import { FloatCartComponent } from './shared/blocks/float-cart/float-cart.component';
import { PaginatorComponent } from './shared/blocks/paginator/paginator.component';
import { ProductCartComponent } from './shared/blocks/product-cart/product-cart.component';
import { ProductItemComponent } from './shared/blocks/product-item/product-item.component';
import { StepperComponent } from './shared/blocks/stepper/stepper.component';
import { SharedModule } from './shared/shared.module';
import { HeaderModule } from './shared/layout/header/header.module';

@NgModule({
  declarations: [
    AppComponent,

  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule ,
    SharedModule,
    HeaderModule
  ],
  exports :[
    SharedModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
