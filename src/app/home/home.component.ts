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

  constructor(private postService: BlogPostService, private login: LoginService) {}

  async ngOnInit() {
    this.login.checkLogin();
  }

  private getElements(): void {
    this.postService.GetPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }

}
