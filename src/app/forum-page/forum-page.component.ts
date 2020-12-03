import { Component, OnInit } from '@angular/core';
import { Category } from '../../types/category';
import { Subcategory } from '../../types/subcategory';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumComponent implements OnInit {
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit,\n' +
    'fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?';

  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  categories: Category[];
  subCategories: Subcategory[];
  recentPosts: Post[];
  apiFetchDone: boolean = false;

  constructor(private api: APIService, private login: LoginService) { }

  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    this.api.ListSubcategorys().then(subcategory => {
      this.subCategories = subcategory.items;
    });
    this.api.ListPosts().then(post => {
      this.recentPosts = post.items;
      this.recentPosts = this.sortRecentPosts;
      this.apiFetchDone = true;
    });
    this.login.checkLogin();
  }

  get sortRecentPosts() {
    return this.recentPosts.sort((a, b) => {
      return <any>new Date(b.createdAt) - <any>new Date(a.createdAt);
    });
  }

}
