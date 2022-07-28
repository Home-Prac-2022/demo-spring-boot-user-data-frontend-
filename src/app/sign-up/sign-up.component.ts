import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";
import {UserDataService} from "../service/user-data.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private user:UserDataService) {}

  ngOnInit(): void {}

    addData = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  saveData() {
    this.user.saveUserData(this.addData.value).subscribe((details)=>{
      console.log(details)
    });
  }

}
