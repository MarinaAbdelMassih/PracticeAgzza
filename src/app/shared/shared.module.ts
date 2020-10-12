import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedComponent} from './components/shared/shared.component';
import {SharedDirective} from './directives/shared.directive';
import {SharedPipe} from './pipes/shared.pipe';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {ProductCartComponent} from './components/product-cart/product-cart.component';


@NgModule({
  declarations: [
    SharedComponent,
    SharedDirective,
    SharedPipe,
    ProductItemComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    //HeaderModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponent,
    SharedDirective,
    SharedPipe,
    CarouselModule,
    ProductItemComponent,
    ProductCartComponent,
    //HeaderModule

  ]
})
export class SharedModule { }
