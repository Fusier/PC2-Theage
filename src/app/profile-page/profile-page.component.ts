import {Component, OnInit} from '@angular/core';
import { Auth } from "aws-amplify";
import {LoginService} from "../service/login-service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {
  username: string;
  email: string;
  loading: boolean = true;
  constructor(private login: LoginService) {}

  ngOnInit() {
    Auth.currentUserInfo().then(info => {
      this.username = info.username;
      this.email = info.attributes.email;
      this.loading = false;
    });
    this.login.checkLogin();
  }

}
