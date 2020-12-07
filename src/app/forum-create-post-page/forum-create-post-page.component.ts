import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subcategory } from 'src/types/subcategory';
import { Category } from '../../types/category';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';


@Component({
  selector: 'app-forum-create-post-page',
  templateUrl: './forum-create-post-page.component.html',
  styleUrls: ['./forum-create-post-page.component.css']
})

export class ForumCreatePostPageComponent implements OnInit {

  categories: Category[];
  subcategories: Subcategory[];
  subOptions: Subcategory[];
  isPosted = false;
  subID: string;
  error: string;
  isError: boolean;

  @ViewChild('title') inputTitle;
  @ViewChild('content') inputContent;

  constructor(private api: APIService, private login: LoginService, private router: Router) { }

  /**
   * Fetches category and subcategory data fron the database
   */
  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    // Fetch a list of subcategories
    this.api.ListSubcategorys().then(subcategory => {
      this.subcategories = subcategory.items;
    });
    // Check login status
    this.login.checkLogin();
  }

  /**
   * Changes the subcategory's select field based on the selected category
   * @param id
   */
  onChange(id: string) {
    this.subOptions = [];
    for (let i = 0; i < this.subcategories.length; i++) {
      if (this.subcategories[i].catID === id) {
        this.subOptions.push(this.subcategories[i]);
      }
    }
  }

  /**
   * Clears the text fields and redirects the user to the submitted subcategory's page
   */
  handleClear() {
    this.isPosted = true;
    this.router.navigate(['/forum-subs/' + this.subID]);
  }

  /**
   * addItem tries to add a post to the database and throws an error if there are empty fields
   */
  addItem(subID: string, title: string, content: string) {
    try {
      if (subID !== '' && title !== '' && content !== '') {
        this.subID = subID;
        this.api.CreatePost({content, subID, title}).then(r => console.log(r));
        this.handleClear();
      } else {
        throw new Error('All fields must be filled before posting');
      }
    } catch (error) {
      this.error = error.message;
      this.isError = true;
      console.log('error signing up:', error);
    }
  }
}


