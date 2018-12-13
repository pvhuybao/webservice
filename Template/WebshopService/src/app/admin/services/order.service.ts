import { Injectable } from '@angular/core';
import { OrderModel } from '../../models/order';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { OrderDetailModel } from '../../models/orderDetail'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private API_PATH = 'http://localhost:8888/api/order';

  constructor(private http: HttpClient,) { }

  get(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.API_PATH);
  }

  getById(id: number): Observable<OrderModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<OrderModel>(url);
  }

  update(id, detail: OrderModel): Observable<any> {
    return this.http.put(this.API_PATH + '/' + id, detail, httpOptions);
  }

  delete(order: OrderModel): Observable<OrderModel> {
    const url = this.API_PATH + '/' + order.id;
    return this.http.delete<OrderModel>(url, httpOptions);
  }
}
