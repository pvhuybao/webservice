import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../../models/category';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  name: string = '';
  description: string = '';

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCategory() {
    let newCategory = new CategoryModel();
    newCategory.name = this.name;
    newCategory.description = this.description;

    this.categoryService.add(newCategory)
      .subscribe( data => {
        this.router.navigate(['/admin/categories']);
      })
  }

}
