import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private myRoute: Router) { }
  // tslint:disable-next-line:typedef
  sendToken(token: string) {
    localStorage.setItem('LoggedInUser', token);
  }
  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('LoggedInUser');
  }
  // tslint:disable-next-line:typedef
  isLoggednIn() {
    return this.getToken() !== null;
  }
  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('LoggedInUser');
    this.myRoute.navigate(['signin']);
  }
}
