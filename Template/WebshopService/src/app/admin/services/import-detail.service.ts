import { Injectable } from '@angular/core';
import { ImportBillDetailModel } from '../../models/importBillDetail';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImportDetailService {

  private API_PATH = 'http://localhost:8888/api/importbill';

  constructor(private http: HttpClient) { }

  get(id: number): Observable<ImportBillDetailModel[]> {
    return this.http.get<ImportBillDetailModel[]>('http://localhost:8888/api/importdetail/' + id);
  }

  getById(id: number): Observable<ImportBillDetailModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<ImportBillDetailModel>(url);
  }
}
