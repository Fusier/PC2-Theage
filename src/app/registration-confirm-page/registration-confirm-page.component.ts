import {Component, OnInit, ViewChild} from '@angular/core';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-registration-confirm-page',
  templateUrl: './registration-confirm-page.component.html',
  styleUrls: ['./registration-confirm-page.component.css']
})

export class RegistrationConfirmPageComponent implements OnInit {

  @ViewChild('username') inputUsername;
  @ViewChild('code') inputCode;
  isError: boolean = false;

  constructor() {}

  ngOnInit() {}

  async confirmSignUp() {
      try {
        await Auth.confirmSignUp(this.inputUsername.nativeElement.value, this.inputCode.nativeElement.value);
      } catch (error) {
        this.isError = true;
        console.log('error confirming sign up', error);
      }
    }
}
