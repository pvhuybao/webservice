import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartModel } from '../../models/cart';
import { ProductModel } from '../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  cart: CartModel[] = [];
  total: number = 0;

  ngOnInit() {
    this.get();
  }

  get() {
    this.cartService.get().subscribe(x => {
      this.cart = x;
    });
    this.cartService.inited();
    if(this.cart) {
      this.updateTotal();
    }    
  }

  updateTotal() {
    var total = 0;
    this.cart.forEach(function (item) {
      total = total + item.product.salePrice * item.quantity;
    })
    this.total = total;
  }

  updateQuantity(product, quantity) {
    if (quantity < 1)
      quantity = 1;
    if (quantity >= product.quantity) {
      alert("Vượt quá số lượng trong kho, sản phẩm này chỉ còn " + product.quantity + " cái !");
      quantity = product.quantity;
    }
    this.cartService.updateQuantity(product, quantity);
    this.updateTotal();
  }

  remove(product) {
    this.cartService.remove(product);
    this.updateTotal();
  }

}
