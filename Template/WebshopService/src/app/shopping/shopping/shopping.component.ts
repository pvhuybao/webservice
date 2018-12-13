import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../../models/product';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from 'src/app/models/category';
import { UserModel } from 'src/app/models/user';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { CartModel } from '../../models/cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  listProducts: ProductModel[];
  listCategory: CategoryModel[];
  listDiscountProduct: ProductModel[];
  cart: CartModel[] = [];
  itemCart: number = 0;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private accountService: AccountService,
    private router: Router,
    private cartService: CartService
  ) { }

  user = new UserModel;
  public keyword: string;
  idCategory: string = "0";

  ngOnInit() {
    this.getListProducts();
    this.getAllCategory();
    this.getDiscountProduct();

    this.accountService.getUserSession().subscribe(data => {
      this.user = data
    })
    this.cartService.inited();
    this.getCart();
  }

  searchProduct() {
    if (this.keyword === undefined || this.keyword === "") { }
    else {
      this.router.navigate(['/search'], { queryParams: { cat: this.idCategory, op: this.keyword } });
    }
  }

  getCart() {
    this.cartService.get().subscribe(data => {
      var total = 0;
      this.cart = data;
      if (data) {
        data.forEach(function (item) {
          total = Number(total) + Number(item.quantity);
        })
      } else {
        this.cart = []
      }
      this.itemCart = total;
    });
  }

  getListProducts(): void {
    this.productService.get().subscribe(data => {
      this.listProducts = data;
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

  logout() {
    sessionStorage.removeItem('user');
    this.accountService.setUserSession();
    this.router.navigateByUrl("");
  }

}
