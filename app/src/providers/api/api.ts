import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {

  private baseUrl = 'http://localhost:3333';
  private url = '';

  constructor(public urlSegment?: string, public http?: HttpClient) {
    this.url = `${this.baseUrl}/${urlSegment}`;
  }

  post(data) {
    return this.http.post(this.url, data)
  }

  get() {
    return this.http.get(this.url)
  }

  update(data) {
    return this.http.put(`${this.url}/${data._id}`, data)
      .subscribe(() => {
      }, (err) => {
        console.log(err)
      });
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
