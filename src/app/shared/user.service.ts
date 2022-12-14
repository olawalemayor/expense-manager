import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../models/user';
import { Observable } from 'rxjs';
import { AuthAPI } from '../api/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private router: Router) {}

  login(username: string, password: string): Observable<string> {
    // Login user and set user token to local storage

    const auth = new AuthAPI(null);

    const token = auth.authenticateUser(username, password);

    return token;
  }

  getUser(): Observable<IUser> {
    //  validates token and returns user from token

    const token = localStorage.getItem('userToken');

    const auth = new AuthAPI(token);

    const user = auth.getUser();

    return user;
  }
}
