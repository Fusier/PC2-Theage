import {Component, Input, OnInit} from '@angular/core';
import { Post } from '../../types/post';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute } from '@angular/router';
import { Subcategory } from '../../types/subcategory';
import { APIService } from '../API.service';


@Component({
  selector: 'app-forum-sub-page',
  templateUrl: './forum-sub-page.component.html',
  styleUrls: ['./forum-sub-page.component.css']
})

export class ForumSubPageComponent implements OnInit {
  id: string;
  posts: Post[];
  title: string;

  constructor(private route: ActivatedRoute, private api: APIService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.GetSubcategory(this.id).then(subcategory => {
      this.title = subcategory.name;
    });
    this.api.ListPosts().then(post => {
      this.posts = post.items;
    });
  }

  /**
   * Deletes a post upon clicking the delete button on a post
   * @param id post's id
   */
  deletePost(id): void {
    //console.log(id)
    this.api.DeletePost({id}).then(r => console.log(r));
  }
 
}

