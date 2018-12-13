import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../models/user';
import { Http, Response, RequestOptions } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  currentUser = new BehaviorSubject<UserModel>(JSON.parse(sessionStorage.getItem('user')));

  private API_PATH = 'http://localhost:8888/api/user';

  login: UserModel;

  constructor(
    private http: HttpClient
  ) { }

  add(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.API_PATH, user, httpOptions);
  }

  update(id, user: UserModel): Observable<any> {
    return this.http.put(this.API_PATH + '/' + id, user, httpOptions);
  }

  checkUsername(user) {
    return this.http.post<UserModel>(this.API_PATH + '/username', user, httpOptions);
  }

  loginAccount(login) {
    return this.http.post<UserModel>(this.API_PATH + '/login', login, httpOptions);
  }

  setUserSession(){
    this.currentUser.next(JSON.parse(sessionStorage.getItem('user')));
  }

  getUserSession(){
    return this.currentUser.asObservable();
  }

}
