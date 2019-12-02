import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class UserProvider extends ApiProvider {

  constructor(
    public http: HttpClient,
  ) {
    super('users', http);
  }

}

