import { Injectable } from '@angular/core';
import { OrderDetailModel } from '../../models/orderDetail';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(
    private http: HttpClient
  ) { }

  private API_PATH = 'http://localhost:8888/api/orderdetail';

  add(orderdetail: OrderDetailModel): Observable<OrderDetailModel> {
    return this.http.post<OrderDetailModel>(this.API_PATH, orderdetail, httpOptions);
  }

}
