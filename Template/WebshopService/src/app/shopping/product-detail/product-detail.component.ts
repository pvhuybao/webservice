import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '../../models/product';
import { CartModel } from '../../models/cart';
import { UserModel } from '../../models/user';
import { CartService } from '../services/cart.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private accountService: AccountService
  ) { }

  id: any;
  product: ProductModel;

  user = new UserModel;
  cart: CartModel[];

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;
    this.getById(this.id);

    this.accountService.getUserSession().subscribe(data => {
      this.user = data
    })

    this.cartService.get().subscribe(data => {
      this.cart = data;
    })

    this.addFacebookComment();
  }

  getById(id) {    
    this.productService.getProductById(id).subscribe(product => {      
      this.product = product;
      //this.idCategory = product.idCategory;
    });
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

  addFacebookComment() {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12";

      if (d.getElementById(id)) {
        //if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
  }

}
