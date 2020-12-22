import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../user';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // userService: UserService;
  userList: User[] | undefined;
  constructor(private userService: UserService) {
    // this.userService = new UserService();
  }
  getUsers() {
    this.userList = this.userService.getUsers();
  }
  ngOnInit(): void {
  }
  public Ourbestgraduates = 'Our best graduates';
  public imageUrl = 'assets/images/student.png';
  public Age = 'Age: ';
  public Country = 'Country: ';
}
