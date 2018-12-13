import { Injectable } from '@angular/core';
import { OrderModel } from '../../models/order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  private API_PATH = 'http://localhost:8888/api/order';

  add(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this.API_PATH, order, httpOptions);
  }
}
