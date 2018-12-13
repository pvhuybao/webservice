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
  private API_PATH = 'http://localhost:8888/api/top/category';

  constructor(private http: HttpClient,) { }

  get(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_PATH);
  }

  getAll(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>('http://localhost:8888/api/category');
  }
}
