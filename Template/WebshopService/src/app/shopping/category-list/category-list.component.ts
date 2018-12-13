import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CategoryModel } from 'src/app/models/category';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: CategoryModel[];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListCategory();
  }

  getListCategory(): void {
    this.categoryService.get().subscribe(data => {
      this.categories = data;      
    })
  }

}
