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

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],

    declarations: [
        AdminPageComponent,
        CreatecategoryComponent,
        EditcategoryComponent,
        ProductsComponent,
        ProductCreateComponent,
        ProductDetailComponent,
        ProductEditComponent,
    ],

    providers: [
        CategoryService
    ]
})
export class AdminModule { }
