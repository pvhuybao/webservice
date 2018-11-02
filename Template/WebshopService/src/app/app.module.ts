import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AdminModule } from './admin/admin.module';
import { ShoppingModule } from './shopping/shopping.module';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ListcategoriesComponent } from './admin/categories/listcategories/listcategories.component';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthHttpService } from './auth/auth-http.service';
import { ShoppingComponent } from './shopping/shopping/shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ListcategoriesComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpModule,
    ShoppingModule
  ],
  providers: [
    AuthService, 
    AuthGuardService, 
    AuthHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
