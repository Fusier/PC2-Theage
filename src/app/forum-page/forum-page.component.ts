import { Component, OnInit } from '@angular/core';
import { Category } from '../../types/category';
import { Subcategory } from '../../types/subcategory';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumComponent implements OnInit {
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit,\n' +
    'fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?';
  array = new Array(3);

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

  constructor() { }

  ngOnInit(): void {
  }

}
