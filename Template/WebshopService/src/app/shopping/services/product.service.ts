import { Injectable } from '@angular/core';
import { ProductModel } from '../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_PATH = 'http://localhost:8888/api/new/product';

  constructor(private http: HttpClient) { }

  get(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.API_PATH);
  }

  getProductById(id: any): Observable<ProductModel> {
    const url = 'http://localhost:8888/api/product/' + id;
    return this.http.get<ProductModel>(url);
  }

  getDiscountProduct(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('http://localhost:8888/api/discount/product');
  }

  getProductListByCategory(id: any): Observable<ProductModel[]> {
    const url = 'http://localhost:8888/api/product/category/' + id;
    return this.http.get<ProductModel[]>(url);
  }

  updateQuantity(id, product: ProductModel): Observable<any> {
    return this.http.put('http://localhost:8888/api/updatequantity/' + id , product, httpOptions);
  }

  getProductByCategory(id: string, keyword: string): Observable<ProductModel[]> {
    if (!keyword.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    var path = "http://localhost:8888/api/product?id=" + id + "&keyword=" + keyword;
    return this.http.get<ProductModel[]>(path);
  }
}
