import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from '../profile/wishlist/wishlist.component';
import { OrderDetailsComponent } from '../profile/order-details/order-details.component';
import { OrderHistoryComponent } from '../profile/order-history/order-history.component';
import { AddressFormComponent } from '../profile/address-form/address-form.component';
import { AddressBookComponent } from '../profile/address-book/address-book.component';
import { ChangePasswordComponent } from '../profile/change-password/change-password.component';
import { PersonalInformationComponent } from '../profile/personal-information/personal-information.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
 
    {
      path: '',
      component: PersonalInformationComponent
    },
    {
      path: 'details',
      component: PersonalInformationComponent
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent
    },
    {
      path: 'address',
      component: AddressBookComponent
    },
    {
      path: 'address/add',
      component: AddressFormComponent
    },
    {
      path: 'address/:id',
      component: AddressFormComponent
    },
    {
      path: 'orders',
      component: OrderHistoryComponent
    },
    {
      path: 'orders/:id',
      component: OrderDetailsComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent
    },
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: '**', redirectTo: 'account', pathMatch: 'full' }
  
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
