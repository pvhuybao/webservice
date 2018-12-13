import { Injectable } from '@angular/core';
import { OrderDetailModel } from '../../models/orderDetail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  private API_PATH = 'http://localhost:8888/api/orderdetail';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<OrderDetailModel[]> {
    return this.http.get<OrderDetailModel[]>('http://localhost:8888/api/orderbilldetail/' + id);
  }

  getById(id: number): Observable<OrderDetailModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<OrderDetailModel>(url);
  }
}
