import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  constructor(private login: LoginService) {}

  /**
   * Checking the login status upon calling
   */
  ngOnInit() {
    this.login.checkLogin();
  }
}
