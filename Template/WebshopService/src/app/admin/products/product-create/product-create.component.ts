import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  name: string;
  idCategory: number = 1;
  image: string;
  description: string;
  detail: string;
  price: number = 0;
  discount: number = 0;
  quantity: number = 0;
  categories: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    })
  }

  create() {
    var product = {
      id: 0,
      code: '',
      name: this.name,
      idCategory: this.idCategory,
      image: this.image,
      description: this.description,
      detail: this.detail,
      quantity: this.quantity,
      discount: this.discount,
      price: this.price
    }

    this.productService.add(product).subscribe(data => {
      this.productService.get().subscribe(data => {
        this.router.navigate(['/admin/products']);
      });
    })

  }

}
