import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class CompanyProvider extends ApiProvider {

  constructor(
    public http: HttpClient,
  ) {
    super('company', http);
  }

}
