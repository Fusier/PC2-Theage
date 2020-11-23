import { Component, OnInit } from '@angular/core';
import { Post } from '../../types/post'
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-forum-sub-page',
  templateUrl: './forum-sub-page.component.html',
  styleUrls: ['./forum-sub-page.component.css']
})
export class ForumSubPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts: Post[] =  [{
      id: 'test post', title: 'test title', content: 'test content', comments: [{
        id: 'test comment', content: 'test content'
      }]},
      { id: 'test post', title: 'test title', content: 'test content', comments: [{
        id: 'test comment', content: 'test content'
      }]},
      { id: 'test post', title: 'test title', content: 'test content', comments: [{
          id: 'test comment', content: 'test content'
      }]},
      { id: 'test post', title: 'test title', content: 'test content', comments: [{
        id: 'test comment', content: 'test content'
      }]},
      { id: 'test post', title: 'test title', content: 'test content', comments: [{
        id: 'test comment', content: 'test content'
      }]
      }
    ]}
