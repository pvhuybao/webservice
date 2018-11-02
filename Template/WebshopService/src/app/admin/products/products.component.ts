import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { ProductService } from '../../admin/services/product.service';
import { CategoryService } from '../../admin/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProducts: ProductModel[];
  categoryName: any;
  categoryId: any;  

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getListProducts();
  }

  getCategoryName(id) {
    this.categoryService.getById(id).subscribe(data => {
      this.categoryName = data.name;
    })
  }

  getListProducts(): void {
    this.productService.get().subscribe(data => {
      this.listProducts = data;      
    })
  }

  delete(product): void {
    this.productService.delete(product).subscribe( data => {
      this.getListProducts();
    })
  }

}
