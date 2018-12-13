import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserModel } from '../../../models/user';
import { UserStatus } from '../../../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  public id: string;
  public user: UserModel;
  public vip = UserStatus;
  public keys: Array<string>;

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
    this.id = params.id;

    this.getById(this.id);
    this.keys = Object.keys(this.vip).filter(Number);
  }

  getById(id) {    
    this.userService.getById(id).subscribe(user => {      
      this.user = user;
    });
  }

  Save() {
    var newUser = new UserModel;
    newUser.username = this.user.username;
    newUser.password = this.user.password;
    newUser.firstName = this.user.firstName;
    newUser.lastName = this.user.lastName;
    newUser.gender = this.user.gender;
    newUser.email = this.user.email;
    newUser.phone = this.user.phone;
    newUser.point = this.user.point;
    newUser.vip = this.user.vip;
    this.userService.update(this.user.id, newUser).subscribe(() => {
      this.router.navigate(['/admin/users']);
    })
  }

}
