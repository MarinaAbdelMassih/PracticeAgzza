import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ConcernComponent } from './components/concern/concern.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [HomeComponent, ConcernComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
