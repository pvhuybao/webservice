import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { AccountService } from '../services/account.service';
import { UserModel } from '../../models/user';
import { CartModel } from 'src/app/models/cart';
import { CartService } from '../services/cart.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private accountService: AccountService,
    private cartService: CartService
  ) { }

  idCategory: string;
  keyword: string;
  listProducts: any[] = [];
  user = new UserModel;
  cart: CartModel[];

  ngOnInit() {
    this.activatedRoute.queryParams
      .filter(params => params.cat)
      .filter(params => params.op)
      .subscribe(params => {
        this.idCategory = params.cat;
        this.keyword = params.op;
        this.loadProducts();
      });

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

  loadProducts() {
    this.productService.getProductByCategory(this.idCategory, this.keyword)
      .subscribe(data => {
        this.listProducts = data;
      });
  }

}
