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
      id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
        id: 'testcomment', content: 'testcontent'
      }]},
      { id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
        id: 'testcomment', content: 'testcontent'
      }]},
      { id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
          id: 'testcomment', content: 'testcontent'
      }]},
      { id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
        id: 'testcomment', content: 'testcontent'
      }]},
      { id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
        id: 'testcomment', content: 'testcontent'
      }] 
      }
    ]}
