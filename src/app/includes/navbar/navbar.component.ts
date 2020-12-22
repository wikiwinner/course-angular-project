import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public login = 'Log in';
  public register = 'register';
  public email = 'info@dumanacademy.org';
  public number = '+7 700 520 0051';

  constructor() { }

  today: number = Date.now();
  public Home = 'Home';
  public OurTeachers = 'Our Teachers';
  public Ouracademy = 'Our Academy';
  public AboutUs = 'About US';
  public Admissions = 'Admissions';
  public Courses = 'Courses';
  public Contact = 'Contact';
  public Achievements = 'Achievements';
  public dashboard = 'Dashboard';

  ngOnInit(): void {
  }

}
