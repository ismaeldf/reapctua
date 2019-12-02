import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider extends ApiProvider {

  constructor(
    public http: HttpClient,
    public storage: Storage,

  ) {
    super('auth', http);
  }

  createSession(session) {
    localStorage.setItem('token', session.token);
    this.storage.set('user', session.user);
  }

  cleanSession() {
    localStorage.removeItem('token');
    this.storage.clear();
    localStorage.clear();
  }

}

