import { Injectable } from '@angular/core';
import { ProductModel } from '../../models/product';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { CartModel } from '../../models/cart';
import { AccountService } from './account.service';
import { UserModel } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private accountService: AccountService
  ) { }

  key = 'cart';
  user = new UserModel;
  private value = new Subject<CartModel[]>();

  get() {
    return this.value.asObservable();
  }

  remove(product: ProductModel) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data = data.filter(x => !(x.product.id == product.id));
    localStorage.setItem(this.key, JSON.stringify(data));
    this.value.next(data);
  }

  clear() {
    localStorage.removeItem(this.key);
    this.inited();
  }

  inited() {
    this.value.next(JSON.parse(localStorage.getItem(this.key)));
  }

  addProductCart(product: ProductModel,quantity: number) {
    var data = JSON.parse(localStorage.getItem(this.key));
    if(!data) data = [];
    if(!data.find(x => x.product.id == product.id)) {
      var item = new CartModel();
      item.product = product;
      item.quantity = quantity;
      data.splice(0, 0, item);
      localStorage.setItem(this.key, JSON.stringify(data));
      this.value.next(data);
    }
    else {
      var newQuantity = Number(data.find(x => x.product.id == product.id).quantity) + Number(quantity);
      this.updateQuantity(product, newQuantity);
    }
  }

  updateQuantity(product: ProductModel, quantity: number) {
    var data = JSON.parse(localStorage.getItem(this.key));
    data.find(x => x.product.id == product.id).quantity = quantity;
    localStorage.setItem(this.key, JSON.stringify(data));
    this.value.next(data);
  }
}
