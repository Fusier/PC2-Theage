import { Component, OnInit, ViewChild } from '@angular/core';
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
  error: boolean = false;


  constructor() {}

  ngOnInit() {}

  /**
   * signUp validates entered data & displays an error upon getting invalid data
   */
  async signUp() {
    try {
      // trying to add a user
      const { user } = await Auth.signUp({
        username: this.inputUsername.nativeElement.value,
        password: this.inputPassword.nativeElement.value,
        attributes: {
          email: this.inputEmail.nativeElement.value
        }
      });
      console.log(user);
    // Cathing invalid input and returning an error message
    } catch (error) {
      this.error = true;
      console.log('error signing up:', error);
    }
  }
}
