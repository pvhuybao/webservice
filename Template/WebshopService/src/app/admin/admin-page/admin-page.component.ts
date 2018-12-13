import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user';
import { AccountService } from '../../shopping/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  user = new UserModel;

  ngOnInit() {

    this.accountService.getUserSession().subscribe(data => {
      this.user = data;
    });
  }

  logout() {
    sessionStorage.removeItem('user');
    this.accountService.setUserSession();
    this.router.navigateByUrl("");
  }

}
