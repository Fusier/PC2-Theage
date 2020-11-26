import { Component, OnInit } from '@angular/core';
import { Comment } from '../../types/comment';
import {Post} from "../../types/post";
import {ActivatedRoute} from "@angular/router";
import {APIService} from "../API.service";

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit {
  id;
  comments: Comment[];
  title: string;
  content: string;

  constructor(private route: ActivatedRoute, private api: APIService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.GetPost(this.id).then(post => {
      this.title = post.title;
      this.content = post.content;
    });
    this.api.ListComments().then(comment => {
      this.comments = comment.items;
    });
  }
}
