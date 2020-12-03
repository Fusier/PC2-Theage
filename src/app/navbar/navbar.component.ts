import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {LoginService} from '../service/login-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  blogLink = 'https://www.theage-muenchen.de/theage-blog.html';
  isLogged: boolean;

  constructor(private login: LoginService) {}

  ngOnInit() {
    try {
      Auth.currentAuthenticatedUser().then(info => {
          this.isLogged = true;
      });
    } catch (error) {
      this.isLogged = false;
    }
  }

  clickBlog() {
    window.location.href = this.blogLink;
  }

  signOut() {
    Auth.signOut().then(r => console.log(r));
  }
}
