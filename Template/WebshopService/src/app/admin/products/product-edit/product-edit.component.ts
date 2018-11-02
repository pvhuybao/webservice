import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductModel } from '../../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  public pro = new ProductModel;
  public id: string;
  public categories: any;
  idCategory: number;

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;
    this.getById(this.id);
    this.getCategories();
  }

  getCategories() {
    this.categoryService.get().subscribe(data => {
      this.categories = data;
    })
  }

  getById(id) {    
    this.productService.getById(id).subscribe(product => {
      this.productService.getProduct(product);
      this.pro = product;
      this.idCategory = this.pro.idCategory;
    });
  }

  edit() {    
    this.pro.name = this.pro.name;
    this.pro.description = this.pro.description;
    this.pro.detail = this.pro.detail;
    this.pro.discount = this.pro.discount;
    this.pro.idCategory = this.pro.idCategory;
    this.pro.image = this.pro.image;
    this.pro.price = this.pro.price;
    this.pro.quantity = this.pro.quantity;   

    this.productService.update(this.pro.id, this.pro).subscribe(data => {
      this.router.navigate(['/admin/products']);
    });
  }

}
