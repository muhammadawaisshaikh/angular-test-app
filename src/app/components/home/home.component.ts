import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/http/home/home.service';
import { MessageServiceService } from '../../core/services/message-service/message-service.service';

import { User } from '../../core/interfaces/user';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};
  messages: any = [];

  constructor(
    private homeService: HomeService,
    private messageService: MessageServiceService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getHomeData();
    this.getUpdatedMessage();
    this.setUserInService();
  }

  getHomeData() {
    this.homeService.getHomepageData().subscribe(
      res => {
        this.data = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  getUpdatedMessage() {
    this.messageService.message.subscribe(
      res => {
        this.messages.push(res);
        console.log('message', res);
        console.log('messages', this.messages);
      }
    )
  }

  menuToggle(event) {
    console.log("from home", event);
  }

  setMessage() {
    let message = (<HTMLInputElement>document.getElementById("message")).value;
    this.messageService.setMessage(message);
  }

  // Angular Service - State Management

  getUserFromService() {
    this.userService.getUser().subscribe(
      res => {
        console.log("state in component > ", res);
      }
    )
  }

  setUserInService() {
    let user: User = {
      id: '123',
      name: 'Muhammad Awais',
      avatar: 'https://avatars2.githubusercontent.com/u/24633059?s=460&u=19555ad8fcd6f89b231927b19650d05193d257e0&v=4',
      country: 'Pakistan'
    }

    this.userService.setUser(user);
  }

  set2UserInService() {
    let user: User = {
      id: '124',
      name: 'Muhammad Ilyas',
      avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
      country: 'Pakistan'
    }

    this.userService.setUser(user);
  }


}
