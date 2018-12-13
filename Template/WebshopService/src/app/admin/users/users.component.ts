import { Component, OnInit } from '@angular/core';
import { UserModel, UserStatus } from '../../models/user';
import { UserService } from '../../admin/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: UserModel[];
  public status = UserStatus;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers(): void {
    this.userService.get().subscribe(data => {
      this.listUsers = data;      
    })
  }

}
