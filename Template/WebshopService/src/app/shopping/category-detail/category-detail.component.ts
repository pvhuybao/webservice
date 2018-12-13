import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../../models/product';
import { CartModel } from '../../models/cart';
import { UserModel } from '../../models/user';
import { CartService } from '../services/cart.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  id: any;
  listProducts: ProductModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private accountService: AccountService
  ) { }

  user = new UserModel;
  cart: CartModel[];

  ngOnInit() {
    // let params: any = this.activatedRoute.snapshot.params;
    // this.id = params.id;
    // this.getListProductByCategory(this.id);

    this.activatedRoute.params
      .subscribe(params => {
        this.getListProductByCategory(params.id);
      });

    this.accountService.getUserSession().subscribe(data => {
      this.user = data
    })

    this.cartService.get().subscribe(data => {
      this.cart = data;
    })
  }

  getListProductByCategory(id): void {
    this.productService.getProductListByCategory(id).subscribe(data => {
      this.listProducts = data;
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

      if (!this.cart) {
        var quantityCart = 0;
      } else if (this.cart.find(x => x.product.id == product.id)) {
        var quantityCart = this.cart.find(x => x.product.id == product.id).quantity;
      } else {
        var quantityCart = 0;
      }

      if (quantityCart < product.quantity) {
        this.cartService.addProductCart(productCart, 1);
      } else {
        alert('Không đủ số lượng');
      }

    }
  }

}
