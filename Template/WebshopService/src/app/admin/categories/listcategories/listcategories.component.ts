import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent implements OnInit {

  listCategories: CategoryModel[];
  categoryDelete = new CategoryModel;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getListCategories();
  }

  getListCategories(): void {
    this.categoryService.get().subscribe(data => {
      this.listCategories = data;
    })
  }

  getById(id) {
    this.categoryService.getById(id).subscribe( data => {
      this.categoryDelete = data;
    })
  }

  getCategory(category:CategoryModel)
  {
    this.categoryService.getCategory(category);
  }

  delete(category): void {
    this.categoryService.delete(category).subscribe( data => {
      this.getListCategories();
    })
  }

}
