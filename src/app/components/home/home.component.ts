import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/http/home/home.service';
import { MessageServiceService } from '../../core/services/message-service/message-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};

  constructor(
    private homeService: HomeService,
    private messageService: MessageServiceService
  ) { }

  ngOnInit() {
    this.getHomeData();
    this.getUpdatedMessage();
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
        console.log('message', res);
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

}
