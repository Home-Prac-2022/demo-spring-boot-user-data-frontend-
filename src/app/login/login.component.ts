import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  btnValue = "Login";

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    this.btnValue = 'Logout'
  }
}
