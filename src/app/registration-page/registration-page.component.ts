import {Component, OnInit, ViewChild} from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationPageComponent implements OnInit {

  @ViewChild('username') inputUsername;
  @ViewChild('email') inputEmail;
  @ViewChild('password') inputPassword;


  constructor() {}

  ngOnInit() {}

  /* handleClear() {
    this.inputUsername.nativeElement.value = '';
    this.inputEmail.nativeElement.value = '';
    this.inputPassword.nativeElement.value = '';
  } */

  async signUp() {
    try {
      const { user } = await Auth.signUp({
        username: this.inputUsername.nativeElement.value,
        password: this.inputPassword.nativeElement.value,
        attributes: {
          email: this.inputEmail.nativeElement.value
        }
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
}
