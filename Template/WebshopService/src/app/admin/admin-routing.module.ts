import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { CreatecategoryComponent } from './categories/createcategory/createcategory.component';
import { EditcategoryComponent } from './categories/editcategory/editcategory.component';
import { ProductsComponent } from './products/products.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

const adminRoutes: Routes = [
    {
        path: 'admin', component: AdminPageComponent,
        children: [
            { path: '', redirectTo: 'categories', pathMatch: 'full' },
            {
                path: 'categories',
                children: [
                    { path: '', component: ListcategoriesComponent },
                    { path: 'create', component: CreatecategoryComponent },
                    { path: ':id', component: EditcategoryComponent },
                ]
            },
            { path: 'products', component: ProductsComponent },
            { path: 'products/create', component: ProductCreateComponent },
            { path: 'products/edit/:id', component: ProductEditComponent },
            { path: 'product-details/:id', component: ProductDetailComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }