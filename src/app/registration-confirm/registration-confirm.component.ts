import {Component, OnInit, ViewChild} from '@angular/core';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['./registration-confirm.component.css']
})

export class RegistrationConfirmComponent implements OnInit {

  @ViewChild('username') inputUsername;
  @ViewChild('code') inputCode;
  error: boolean = false;

  constructor() {}

  ngOnInit() {}

  async confirmSignUp() {
      try {
        await Auth.confirmSignUp(this.inputUsername.nativeElement.value, this.inputCode.nativeElement.value);
      } catch (error) {
        this.error = true;
        console.log('error confirming sign up', error);
      }
    }
}
