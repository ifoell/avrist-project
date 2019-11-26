import { Component, OnInit } from '@angular/core';
import { Login } from '../interface/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    let user = this.login.username
    localStorage.setItem('user', user)

    let pwd = this.login.username
    localStorage.setItem('pwd', pwd)

    let token = this.login.username + this.login.password
    localStorage.setItem('token', token)

    this.router.navigate(['dashboard'])
  }

  register(){
    this.router.navigate(['register'])
  }

}
