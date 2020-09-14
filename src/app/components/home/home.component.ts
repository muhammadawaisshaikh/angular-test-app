import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../core/http/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {};

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.getHomeData();
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

  menuToggle(event) {
    console.log("from home", event);
  }

}
