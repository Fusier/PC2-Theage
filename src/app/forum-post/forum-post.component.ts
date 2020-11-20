import { Component, OnInit } from '@angular/core';
import { Comment } from '../../types/comment';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {


  constructor() { }
  
  ngOnInit(): void {
  }

  post: String = "am a post";
  text: String = "am a text";
  title: String = "am a title";
  comments: Comment[] = [{
    id: "jaa",
    content: "I am content"
  }];
}
