import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  ticketLink: string = 'https://www.theage-muenchen.de/veranstaltungen.html';
  blogLink: string = 'https://www.theage-muenchen.de/theage-blog.html';

  constructor(private login: LoginService) {}

  // Check if user is logged in
  ngOnInit() {
    this.login.checkLogin();
  }

  /**
   * clickTicket redirects the user to theage's ticket section upon clicking
   */
  clickTicket() {
    window.location.href = this.ticketLink;
  }

  /**
   * clickTicket redirects the user to theage's blog upon clicking
   */
  clickBlog() {
    window.location.href = this.blogLink;
  }

}
