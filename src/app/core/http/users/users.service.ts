import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  getPeopleUrl = this.config.API_ENDPOINT+'people/';

  getUsers() {
    return this.http.get(this.getPeopleUrl, { headers: this.config.headers() });
  }
}
