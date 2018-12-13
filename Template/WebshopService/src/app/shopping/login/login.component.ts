import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { AccountService } from '../services/account.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private accountService: AccountService,
    private cartService: CartService
  ) { }

  username: string = '';
  password: string = '';  

  ngOnInit() {
  }

  login() {
    let login = new UserModel();
    login.username = this.username;
    login.password = this.password;

    this.accountService.loginAccount(login).subscribe(data => {
      if(data != null && data.vip == 11) {
        sessionStorage.setItem('user', JSON.stringify(data));
        this.accountService.setUserSession();
        this.router.navigateByUrl('/admin/categories');        
      }
      else if(data != null) {
        sessionStorage.setItem('user', JSON.stringify(data));
        this.accountService.setUserSession();
        this.cartService.inited();
        this.router.navigateByUrl('/');
      } else {
        alert('Sai tên tài khoản hoặc mật khẩu !');
      }
    });
  }

}
