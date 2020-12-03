import { Component, OnInit, ViewChild } from '@angular/core';
import { Comment } from '../../types/comment';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';


@Component({
  selector: 'app-forum-post-page',
  templateUrl: './forum-post-page.component.html',
  styleUrls: ['./forum-post-page.component.css']
})
export class ForumPostPageComponent implements OnInit {

  id;
  subId;
  subName;
  comments: Comment[];
  title: string;
  content: string;
  createdAt: string;
  isLoading: boolean = true;
  isPosted: boolean = false;
  errorMessage: string;
  isError: boolean;
  @ViewChild('comment') inputComment;

  constructor(private route: ActivatedRoute, private api: APIService, private login: LoginService) { }

  /**
   * Fetch post, comments and subcategory name from backend when opening the page
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.GetPost(this.id).then(post => {
      this.title = post.title;
      this.content = post.content;
      this.subId = post.subID;
      this.createdAt = post.createdAt;

      // fetching subcategory data
      this.api.GetSubcategory(this.subId).then(sub => {
        this.subName = sub.name;
        this.isLoading = false;
      });
    });

    // Listing comments
    this.api.ListComments().then(comment => {
      this.comments = comment.items;

    });

    // Subscribing to database updates
    this.api.OnCreateCommentListener.subscribe( (event: any) => {
      const newComment = event.value.data.onCreateComment;
      this.comments = [...this.comments, newComment ];
    });

    this.login.checkLogin();
  }

  /**
   * Sends a comment into the backend with user made content
   * @param comment comment's content
   */
  addComment(comment: string) {
    try {
      if (comment !== '') {
        this.isError = false;
        this.api.CreateComment({postID: this.id, content: comment}).then(r => console.log(r));
        this.handleClear();
      } else {
        throw new Error('The comment cannot be empty');
      }
    } catch (error) {
      this.isPosted = false;
      this.errorMessage = error.message;
      this.isError = true;
      console.log('error signing up:', error);
    }
  }

  /**
   * Sends a request to the backend to delete a post with specific id upon clicking a button
   * @param id comment's id
   */
  deleteComment(id: string) {
    this.api.DeleteComment({id}).then(r => console.log(r));
    for(let i = 0; i < this.comments.length; i++) {
      if ( this.comments[i].id === id) {
        this.comments.splice(i, 1);
      }
    }
  }

  /**
   *  Clears all the text from the text fields upon clicking the "Create comment" button
   */
  handleClear() {
    this.isPosted = true;
    this.inputComment.nativeElement.value = '';
  }

  get sortComments() {
    return this.comments.sort((a, b) => {
      return <any> new Date(a.createdAt) - <any> new Date(b.createdAt);
    });
  }
}
