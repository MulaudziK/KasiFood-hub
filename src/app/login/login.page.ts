import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public errorFeedback = {

    email:[
      {type: 'required' , feedback: 'email address required'},
      {type: 'pattern', feedback: 'Please enter a valid email address'}
    ],

    password:[
      {type: 'required' , feedback: 'password is required'}
    ]

  }

  loginForm = this.fb.group({
    email: [''],
    password:[''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public logForm() {
    console.log(this.loginForm.value);
  }

}
