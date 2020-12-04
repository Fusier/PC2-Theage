import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';


@Component({
  selector: 'app-forum-sub-page',
  templateUrl: './forum-sub-page.component.html',
  styleUrls: ['./forum-sub-page.component.css']
})

export class ForumSubPageComponent implements OnInit {

  isAdmin: boolean = false;
  id: string;
  posts: Post[];
  title: string;

  constructor(private route: ActivatedRoute, private api: APIService, private login: LoginService) {}

  /**
   * Fetching subcategories and posts from the database
   * Checks login & admin status after fetching the data
   */
  ngOnInit(): void {
    // Fetching categories
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.GetSubcategory(this.id).then(subcategory => {
      this.title = subcategory.name;
    });
    // Fetching posts
    this.api.ListPosts().then(post => {
      this.posts = post.items;
    });
    this.login.checkLogin();
    this.login.checkAdminStatus((result) => this.isAdmin = result);
  }

  /**
   * Deletes a post upon clicking the delete button on a post
   * @param id post's id
   */
  deletePost(id): void {
    // Remove all the comments of the post and then removing the post itself
    this.deleteComments(id);
    this.api.DeletePost({id}).then(r => console.log(r));
    // And then we remove it form the UI 
    for ( let i = 0; i < this.posts.length; i++) {
      if ( this.posts[i].id === id) {
        this.posts.splice(i, 1);
      }
    }
  }

  /**
   * Deletes all the comments in deleted post
   * @param id parent post's id
   */
  deleteComments(id: string) {
    // Fetching the comments
    this.api.ListComments().then(query => {
      query.items.forEach(comment => {
        // And removing all the comments that have matching postID
        if (comment.postID === id) {
          const commentID: string = comment.postID;
          console.log(comment.id);
          this.api.DeletePost({id: commentID}).then(e => console.log(e));
        }
      });
    });
  }
}

