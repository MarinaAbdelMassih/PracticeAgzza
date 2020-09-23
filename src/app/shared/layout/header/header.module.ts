import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BottomnavComponent } from './components/bottomnav/bottomnav.component';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [TopnavComponent, NavbarComponent, BottomnavComponent, HeaderComponent],
  imports: [
    CommonModule ,
    SharedModule ,
    RouterModule
  ],
  exports : [HeaderComponent , SharedModule ,
    RouterModule]
})
export class HeaderModule { }
