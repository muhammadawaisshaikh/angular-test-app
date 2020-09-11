import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../core/http/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = {};

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsersData();
  }

  getUsersData() {
    this.usersService.getUsers().subscribe(
      res => {
        this.users = res;
        console.log(this.users);
      },
      err => {
        console.log(err);
      }
    );
  }

}
