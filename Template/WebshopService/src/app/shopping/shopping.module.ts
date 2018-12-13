import { ShoppingRoutingModule } from './shopping-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductService } from './services/product.service';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
        ShoppingRoutingModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        ReactiveFormsModule    
    ],

    providers: [
        ProductService
    ],
    declarations: [LoginComponent, HomepageComponent, ProductListComponent, CategoryListComponent, CategoryDetailComponent, ProductDetailComponent, CartComponent, PaymentComponent, ThankYouComponent, RegisterComponent, AccountComponent, SearchResultComponent]
})
export class ShoppingModule { }