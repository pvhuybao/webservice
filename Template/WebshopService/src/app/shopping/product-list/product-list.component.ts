import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../../models/product';
import { AccountService } from '../services/account.service';
import { UserModel } from '../../models/user';
import { CartModel } from 'src/app/models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listProducts: ProductModel[];

  constructor(
    private productService: ProductService,
    private accountService: AccountService,
    private cartService: CartService
  ) { }

  user = new UserModel;
  cart: CartModel[];

  ngOnInit() {
    this.getListProducts();
    this.accountService.getUserSession().subscribe(data => {
      this.user = data
    })
  }

  addProductCart(product) {
    if (!this.user) {
      alert('Vui lòng đăng nhập để đặt hàng !');
    } else {
      
      var productCart = {
        id: product.id,
        code: product.code,
        name: product.name,
        description: product.description,
        detail: product.detail,
        idCategory: product.idCategory,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
        discount: product.discount,
        salePrice: product.salePrice
      }  

      if(!this.cart) {
        var quantityCart = 0;        
      } else if (this.cart.find(x => x.product.id == product.id)) {
        var quantityCart = this.cart.find(x => x.product.id == product.id).quantity;
      } else {
        var quantityCart = 0; 
      }

      if(quantityCart < product.quantity) {
        this.cartService.addProductCart(productCart, 1);
      } else {
        alert('Không đủ số lượng');
      }

    }
  }

  getListProducts(): void {
    this.productService.get().subscribe(data => {
      this.listProducts = data;      
    })
  }

}
