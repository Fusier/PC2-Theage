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

  indexes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  categories: Category[];
  subCategories: Subcategory[];
  recentPosts: Post[];
  apiFetchDone: boolean = false;
  isAdmin: boolean = false

  constructor(private api: APIService, private login: LoginService) { }

  /**
   * Fetches all categories, subcategories and recent posts upon startup
   * After fetching the data the site checks the login and admin status of the user
   */
  ngOnInit(): void {
    // Fetching categories
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    // Fetching subcategories
    this.api.ListSubcategorys().then(subcategory => {
      this.subCategories = subcategory.items;
    });
    // Fetches the recent posts
    this.api.ListPosts().then(post => {
      this.recentPosts = post.items;
      this.recentPosts = this.sortRecentPosts;
      this.apiFetchDone = true;
    });
    // Checking login & admin status
    this.login.checkLogin();
    this.login.checkAdminStatus((result) => this.isAdmin = result);
  }

  /**
   * Sort given posts by createdAt attribute
   */
  get sortRecentPosts() {
    return this.recentPosts.sort((a, b) => {
      return <any>new Date(b.createdAt) - <any>new Date(a.createdAt)
    });
  }

}
