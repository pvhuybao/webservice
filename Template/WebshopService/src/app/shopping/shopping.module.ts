import { ShoppingRoutingModule } from './shopping-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        ShoppingRoutingModule,
        CommonModule,
        FormsModule,
        BrowserAnimationsModule
    ],    
})
export class ShoppingModule { }