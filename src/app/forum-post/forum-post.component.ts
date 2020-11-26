import {AfterViewInit, Component, OnInit} from '@angular/core';
import { Comment } from '../../types/comment';
import {Post} from '../../types/post';
import {ActivatedRoute} from '@angular/router';
import {APIService} from '../API.service';
import { MatSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-forum-post',
  templateUrl: './forum-post.component.html',
  styleUrls: ['./forum-post.component.css']
})
export class ForumPostComponent implements OnInit, AfterViewInit {
  id;
  subId;
  subName;
  comments: Comment[];
  title: string;
  content: string;
  isLoading: boolean = true;



  constructor(private route: ActivatedRoute, private api: APIService) { }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.api.GetPost(this.id).then(post => {
      this.title = post.title;
      this.content = post.content;
      this.subId = post.subID;

      this.api.GetSubcategory(this.subId).then(sub => {
        this.subName = sub.name;
        /*console.log(this.subName);*/
        this.isLoading = false;
      });

    });
    this.api.ListComments().then(comment => {
      this.comments = comment.items;
    });

  }

  // post: String = "I am a sample post";
  // text: String = "I am a sample text";
  // title: String = "I am a sample title";
  // comments: Comment[] = [{
  //   id: "jaa",
  //   content: "Don't mind me, I am just some sample content"
  // }];
}
