import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_PATH = 'http://localhost:8888/api/user';

  constructor(private http: HttpClient,) { }

  get(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.API_PATH);
  }

  getById(id: number): Observable<UserModel> {
    const url = this.API_PATH + '/' + id;
    return this.http.get<UserModel>(url);
  }

  update(id, user: UserModel): Observable<any> {
    return this.http.put(this.API_PATH + '/' + id, user, httpOptions);
  }
}
