import {Component, OnInit, ViewChild} from '@angular/core';
import { Auth } from 'aws-amplify';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration-confirm-page',
  templateUrl: './registration-confirm-page.component.html',
  styleUrls: ['./registration-confirm-page.component.css']
})

export class RegistrationConfirmPageComponent implements OnInit {

  @ViewChild('username') inputUsername;
  @ViewChild('code') inputCode;
  error: boolean = false;


  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * Reroutes upon successful login
   */
  reroute() {
    this.router.navigate(['/start-page']);
  }

  /**
   * confirmSignUp validates entered data, reroutes if successful and displays an error upon getting invalid data
   */
  async confirmSignUp() {
      try {
        this.error = false;
        await Auth.confirmSignUp(this.inputUsername.nativeElement.value, this.inputCode.nativeElement.value)
          .then(() => {
            this.reroute();
        });
      } catch (error) {
        this.error = true;
      }
    }
}
