import { Component, OnInit } from '@angular/core';
import { Category } from '../../types/category';

@Component({
  selector: 'app-forum-create-post',
  templateUrl: './forum-create-post.component.html',
  styleUrls: ['./forum-create-post.component.css']
})
export class ForumCreatePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  categories: Category[] = [{id: 'testid', name: 'testcategory', subcategories: [{
    id: 'testid', name: 'testsubcategory', posts: [{
      id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
        id: 'testcomment', content: 'testcontent'
        }]
      }]
  }]}, {id: 'testid', name: 'testcategory', subcategories: [{
      id: 'testid', name: 'testsubcategory', posts: [{
        id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
          id: 'testcomment', content: 'testcontent'
        }]
      }]
    }]}, {id: 'testid', name: 'testcategory', subcategories: [{
      id: 'testid', name: 'testsubcategory', posts: [{
        id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
          id: 'testcomment', content: 'testcontent'
        }]
      }]
    }]}, {id: 'testid', name: 'testcategory', subcategories: [{
      id: 'testid', name: 'testsubcategory', posts: [{
        id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
          id: 'testcomment', content: 'testcontent'
        }]
      }]
    }]}, {id: 'testid', name: 'testcategory', subcategories: [{
      id: 'testid', name: 'testsubcategory', posts: [{
        id: 'testpost', title: 'testtitle', content: 'testcontent', comments: [{
          id: 'testcomment', content: 'testcontent'
        }]
      }]
    }]}];

}
