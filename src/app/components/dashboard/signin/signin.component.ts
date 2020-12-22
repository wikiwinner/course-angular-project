import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form;
  constructor(private fb: FormBuilder,
              private myRoute: Router,
              private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.form.valid) {
      this.auth.sendToken(this.form.value.email);
      this.myRoute.navigate(['home']);
    }
  }

}
