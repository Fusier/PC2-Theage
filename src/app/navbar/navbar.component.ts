import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  blogLink = 'https://www.theage-muenchen.de/theage-blog.html';
  isLogged: boolean;

  constructor() {}

  /**
   * verifying the user upon startup
   */
  ngOnInit() {
    try {
      Auth.currentAuthenticatedUser().then(info => {
          this.isLogged = true;
      });
    } catch (error) {
      this.isLogged = false;
    }
  }

  /**
   * redirecting the user to blog after clicking the link
   */
  clickBlog() {
    window.location.href = this.blogLink;
  }

  /**
   * Signs the user out after clicking the button
   */
  signOut() {
    Auth.signOut().then(r => console.log(r));
  }
}
