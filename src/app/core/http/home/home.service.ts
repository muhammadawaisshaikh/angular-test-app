import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  rootUrl = this.config.API_ENDPOINT;

  getHomepageData() {
    return this.http.get(this.rootUrl, { headers: this.config.headers() });
  }

}
