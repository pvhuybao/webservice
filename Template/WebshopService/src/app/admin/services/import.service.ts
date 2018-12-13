import { Injectable } from '@angular/core';
import { ImportBillModel } from '../../models/importBill';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  private API_PATH = 'http://localhost:8888/api/importbill';

  constructor(private http: HttpClient) { }

  get(): Observable<ImportBillModel[]> {
    return this.http.get<ImportBillModel[]>(this.API_PATH);
  }

  getById(id: number): Observable<ImportBillModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<ImportBillModel>(url);
  }

  delete(detail: ImportBillModel): Observable<ImportBillModel> {
    const url = this.API_PATH + '/' + detail.id;
    return this.http.delete<ImportBillModel>(url, httpOptions);
  }
}
