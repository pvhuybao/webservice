import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../../models/product';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from 'src/app/models/category';
import { CartService } from '../services/cart.service';
import { UserModel } from 'src/app/models/user';
import { AccountService } from '../services/account.service';
import { CartModel } from 'src/app/models/cart';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  listProducts: ProductModel[];
  categories: CategoryModel[];
  listCategory: CategoryModel[];
  listDiscountProduct: ProductModel[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private accountService: AccountService
  ) { }

  user = new UserModel;
  cart: CartModel[];

  ngOnInit() {
    this.getListProducts();
    this.getListCategory();
    this.getAllCategory();
    this.getDiscountProduct();

    this.accountService.getUserSession().subscribe(data => {
      this.user = data
    })
    
    this.cartService.get().subscribe(data => {
      this.cart = data;
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

  getListCategory(): void {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    })
  }

  getAllCategory(): void {
    this.categoryService.getAll().subscribe(data => {
      this.listCategory = data;
    })
  }

  getDiscountProduct(): void {
    this.productService.getDiscountProduct().subscribe(data => {
      this.listDiscountProduct = data;
    })
  }

}
