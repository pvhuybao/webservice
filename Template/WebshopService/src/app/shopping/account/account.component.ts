import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { UserModel } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  checkpass: boolean = false;
  public password: string = "";
  public rePassword: string = "";

  public user = new UserModel;

  ngOnInit() {
    this.accountService.getUserSession().subscribe(data => {
      this.user = data
    })
  }

  checkpassword() {
    if (this.password == this.rePassword) {
      this.checkpass = false;
    } else {
      this.checkpass = true;
    }
  }

  SaveChange() {
    var user = new UserModel;
    user.username = this.user.username;
    user.gender = this.user.gender;
    user.vip = this.user.vip;
    user.point = this.user.point;
    user.firstName = this.user.firstName;
    user.lastName = this.user.lastName;
    user.email = this.user.email;
    user.phone = this.user.phone;
    user.password = this.password;
    this.accountService.update(this.user.id, user).subscribe(data => {
      alert("Đổi thành công !");
      this.router.navigateByUrl('/');
    })
  }

}
