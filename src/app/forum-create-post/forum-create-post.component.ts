import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { Subcategory } from 'src/types/subcategory';
import { Category } from '../../types/category';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';


@Component({
  selector: 'app-forum-create-post',
  templateUrl: './forum-create-post.component.html',
  styleUrls: ['./forum-create-post.component.css']
})
export class ForumCreatePostComponent implements OnInit {
  categories: Category[];
  subcategories: Subcategory[];
  subOptions: Subcategory[];
  isPosted: boolean = false;
  subID: string;

  @ViewChild('title') inputTitle;
  @ViewChild('content') inputContent;

  constructor(private api: APIService, private login: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });

    this.api.ListSubcategorys().then(subcategory => {
      this.subcategories = subcategory.items;
    });
    this.login.checkLogin();
  }

  onChange(id: string) {
    this.subOptions = [];
    for(let i = 0; i < this.subcategories.length; i++) {
      if (this.subcategories[i].catID === id) {
        this.subOptions.push(this.subcategories[i]);
      }
    }

  }
  addItem(subID: string, title: string, content: string) {
    this.subID = subID;
    this.api.CreatePost({content, subID, title}).then(r => console.log(r));
  }

  handleClear() {
    this.isPosted = true;
    this.router.navigate(['/forum-subs/' + this.subID]);
  }
}


