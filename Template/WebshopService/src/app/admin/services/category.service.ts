import { Injectable } from '@angular/core';
import { CategoryModel } from '../../models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthHttpService } from '../../auth/auth-http.service'
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_PATH = 'http://localhost/webshopserver/api/category';

  constructor(private http: HttpClient,) { }

  get(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_PATH);
  }

  getById(id: number): Observable<CategoryModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<CategoryModel>(url);
  }

  add(category: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(this.API_PATH, category, httpOptions);
  }

  delete(category: CategoryModel): Observable<CategoryModel> {
    const url = this.API_PATH + '/' + category.id;
    return this.http.delete<CategoryModel>(url, httpOptions);
  }

  update(id, category: CategoryModel): Observable<any> {
    return this.http.put(this.API_PATH + '/' + id, category, httpOptions);
  }
  
  cate: CategoryModel;
  getCategory(category: CategoryModel)
  {
    return this.cate = category;
  }

  // get(): Observable<CategoryModel[]> {    
  //   return this.authHttpService.get(this.API_PATH)
  //     .map(res => res.json() || []);
  // }

}
