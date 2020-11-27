import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
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
  isPosted: boolean = false;
  @ViewChild('comment') inputComment;



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

    this.api.OnCreateCommentListener.subscribe( (event: any) => {
      const newComment = event.value.data.onCreateComment;
      this.comments = [newComment, ...this.comments ];
    });
  }

  addComment(comment: string) {
    this.api.CreateComment({postID: this.id, content: comment}).then(r => console.log(r));
  }

  deleteComment(id: string) {
    this.api.DeleteComment({id}).then(r => console.log(r));
  } 

  handleClear() {
    this.isPosted = true;
    this.inputComment.nativeElement.value = '';
  }
}
