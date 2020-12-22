import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, isEmailValid()]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }
}
// tslint:disable-next-line:typedef
function isEmailValid() {
  // tslint:disable-next-line:no-shadowed-variable
  return (control: { value: string; }) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(control.value) ? null : { invalidEmail: true };
  };
}
