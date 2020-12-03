import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { LoginService } from '../service/login-service';

import { BlogPostService } from '../service/blog-post.service';
import { BlogPost } from '../models/blog-post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = true;
  posts: BlogPost[];

  ticketLink: string = "https://www.theage-muenchen.de/veranstaltungen.html";
  constructor(private login: LoginService) {}

  // Check if user is logged in
  async ngOnInit() {
    this.login.checkLogin();
  }

  /**
   * clickTicket redirects the user to theage's ticket section upon clicking
   */
  clickTicket() {
    window.location.href = this.ticketLink;
  }

}
