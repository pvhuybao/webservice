import { Injectable } from '@angular/core';
import { OrderModel } from '../../models/order';
import { ImportBillModel } from '../../models/importBill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StatisticalService {

  constructor(private http: HttpClient) { }

  getOrder(start: any, end: any): Observable<OrderModel[]> {
    var api_link = "http://localhost:8888/api/order/statistical?start=" + start + "&end=" + end;
    return this.http.get<OrderModel[]>(api_link);
  }

  getImport(start: any, end: any): Observable<ImportBillModel[]> {
    var api_link = "http://localhost:8888/api/Import/statistical?start=" + start + "&end=" + end;
    return this.http.get<ImportBillModel[]>(api_link);
  }
}
