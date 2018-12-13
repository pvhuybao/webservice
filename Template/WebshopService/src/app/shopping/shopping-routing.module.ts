import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { SearchResultComponent } from './search-result/search-result.component';


const shoppingRoutes: Routes = [
  {
    path: '', component: ShoppingComponent,
    children: [
      // children: [
      //     { path: '', component: ShoppingComponent, pathMatch: 'full' }
      // ]
      { path: '', component: HomepageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'category/:id', component: CategoryDetailComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'cart/payment', component: PaymentComponent },      
      { path: 'thankyou', component: ThankYouComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'account', component: AccountComponent },
      { path: 'search', component: SearchResultComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
