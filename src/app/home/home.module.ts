import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AppAgzzaComponent } from './components/app-agzza/app-agzza.component';
import { ConcernComponent } from './components/concern/concern.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [HomeComponent, AppAgzzaComponent, ConcernComponent, SliderComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule {
}
