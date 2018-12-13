import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminPageComponent } from './admin-page/admin-page.component';

import { CategoryService } from './services/category.service';
import { CreatecategoryComponent } from './categories/createcategory/createcategory.component';
import { EditcategoryComponent } from './categories/editcategory/editcategory.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { ImportsComponent } from './imports/imports.component';
import { ImportEditComponent } from './imports/import-edit/import-edit.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OrderDetailComponent } from './orders/order-detail/order-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ImportCreateComponent } from './imports/import-create/import-create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        BsDatepickerModule.forRoot()
    ],

    declarations: [
        AdminPageComponent,
        CreatecategoryComponent,
        EditcategoryComponent,
        ProductsComponent,
        ProductCreateComponent,
        ProductDetailComponent,
        ProductEditComponent,
        OrdersComponent,
        UsersComponent,
        StatisticalComponent,
        ImportsComponent,
        ImportEditComponent,
        OrderDetailComponent,
        UserEditComponent,
        ImportCreateComponent,
    ],

    providers: [
        CategoryService
    ]
})
export class AdminModule { }
