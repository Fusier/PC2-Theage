import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  blogLink = 'https://www.theage-muenchen.de/theage-blog.html';

  ngOnInit() {}

  clickBlog() {
    window.location.href = this.blogLink;
  }

  signOut() {
    Auth.signOut().then(r => console.log(r));
  }
}
