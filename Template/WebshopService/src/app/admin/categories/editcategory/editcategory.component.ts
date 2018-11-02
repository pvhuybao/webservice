import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryModel } from '../../../models/category';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public cate = new CategoryModel;
  public id: string;

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;
    this.getById(this.id);
  }

  getById(id) {    
    this.categoryService.getById(id).subscribe(category => {
      this.categoryService.getCategory(category);
      this.cate = category;
    });
  }

  editCategory() {    
    this.cate.name = this.cate.name;
    this.cate.description = this.cate.description;    

    this.categoryService.update(this.cate.id, this.cate).subscribe(data => {
      this.router.navigate(['/admin/categories']);
    });
  }

}
