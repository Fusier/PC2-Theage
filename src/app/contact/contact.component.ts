import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private login: LoginService) {}

  ngOnInit() {
    this.login.checkLogin();
  }
}
