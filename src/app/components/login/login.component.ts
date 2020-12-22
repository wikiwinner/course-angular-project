import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  powers = ['Student', 'Teacher',
    'Professor', 'Developer'];

  model = new Hero(18, 'Duman', this.powers[0],'Student', 'wikiblogger@list.ru',);

  submitted = false;
  public Login = 'Log in';
  public contactAbout = 'Enter your login and password';
  public Logins = 'Login';
  public Home = 'Home';

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '', '');
  }


}
