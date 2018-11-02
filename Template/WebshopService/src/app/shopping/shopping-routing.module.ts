import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';


const shoppingRoutes: Routes = [
  {
    path: '', component: ShoppingComponent,
    // children: [
    //     { path: '', component: ShoppingComponent, pathMatch: 'full' }
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
