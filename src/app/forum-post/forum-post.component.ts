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

  post: String = "I am a sample post";
  text: String = "I am a sample text";
  title: String = "I am a sample title";
  comments: Comment[] = [{
    id: "jaa",
    content: "Don't mind me, I am just some sample content"
  }];
}
