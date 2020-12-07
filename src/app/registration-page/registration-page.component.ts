import { Component, OnInit, ViewChild } from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';

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


  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * Reroutes upon successful login
   */
  reroute() {
    this.router.navigate(['/registration-confirm']);
  }

  /**
   * signUp validates entered data, reroutes if successful and displays an error upon getting invalid data
   */
  async signUp() {
    try {
      this.error = false;
      const user = await Auth.signUp({
        username: this.inputUsername.nativeElement.value,
        password: this.inputPassword.nativeElement.value,
        attributes: {
          email: this.inputEmail.nativeElement.value
        }
      }).then(() => {
          this.reroute();
      });
    } catch (error) {
      this.error = true;
    }
  }
}
