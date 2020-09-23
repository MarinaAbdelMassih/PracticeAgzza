import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [ProfileComponent, AddressBookComponent, AddressFormComponent, ChangePasswordComponent, OrderDetailsComponent, OrderHistoryComponent, PersonalInformationComponent, SideBarComponent, WishlistComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
