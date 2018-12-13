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

  // private API_PATH = 'http://localhost/webshopserver/api/product';
  private API_PATH = 'http://localhost:8888/api/product';

  constructor(private http: HttpClient) { }

  get(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.API_PATH);
  }

  getById(id: number): Observable<ProductModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<ProductModel>(url);
  }

  add(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.API_PATH, product, httpOptions);
  }

  delete(product: ProductModel): Observable<ProductModel> {
    const url = this.API_PATH + '/' + product.id;
    return this.http.delete<ProductModel>(url, httpOptions);
  }

  update(id, product: ProductModel): Observable<any> {
    return this.http.put(this.API_PATH + '/' + id, product, httpOptions);
  }

  pro: ProductModel;
  getProduct(product: ProductModel)
  {
    return this.pro = product;
  }
  
}
