import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { AccountService } from '../services/account.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  public firstName: string = "";
  public lastName: string = "";
  public email: string = "";
  public phone: string = "";
  public username: string = "";
  public password: string = "";
  public rePassword: string = "";

  checkuser: boolean = false;
  checkpass: boolean = false;
  checkmail: boolean = false;

  ngOnInit() {
  }

  checkemail() {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(this.email)) {
      this.checkmail = true;
    }
    else {
      this.checkmail = false;
    }
  }

  checkUsername() {
    var user = new UserModel;
    // var newUser = new UserModel
    user.username = this.username;
    this.accountService.checkUsername(user).subscribe(data => {
      // newUser = data;
      if (data) {
        this.checkuser = true;
      } else {
        this.checkuser = false;
      }
    })
  }

  checkpassword() {
    if (this.password == this.rePassword) {
      this.checkpass = false;
    } else {
      this.checkpass = true;
    }
  }

  register() {
    var user = new UserModel;
    user.username = this.username;
    user.password = this.password;
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.gender = "Nam";
    user.email = this.email;
    user.phone = this.phone;
    user.vip = 0;
    user.point = 0;
    this.accountService.add(user).subscribe(() => {
      this.router.navigateByUrl('/login');
    })
  }

}
