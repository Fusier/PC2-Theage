import { Component, OnInit, ViewChild } from '@angular/core';
import { Subcategory } from 'src/types/subcategory';
import { Category } from '../../types/category';
import { APIService } from '../API.service';

@Component({
  selector: 'app-forum-management',
  templateUrl: './forum-management.component.html',
  styleUrls: ['./forum-management.component.css']
})
export class ForumManagementComponent implements OnInit {
  categories: Category[];
  subcategories: Subcategory[];
  subOptions: Subcategory[];
  constructor(private api: APIService) { }

  /**
   * Fetches categories and subcategories form the backend
   */
  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    this.api.ListSubcategorys().then(subcategory => {
      this.subcategories = subcategory.items;
    });
  }

  /**
   * Fetched category's subcategories upon clicking
   * The matching subcategories are stored in subOptions variable
   * @param id clicked category's id
   */
  onChange(id: string) {
    this.subOptions = [];
    for(let i = 0; i < this.subcategories.length; i++) {
      if (this.subcategories[i].catID === id) {
        this.subOptions.push(this.subcategories[i]);
      }
    }
  }

  /**
   * adds a category based on given text
   */
  addCategory(name: string) {
    console.log("Added a category");
    this.api.CreateCategory({name}).then(r => console.log(r));
  }

  deleteCategory(id: string) {
    this.deleteSubcategories(id)
    this.api.DeleteCategory({id}).then(r => console.log(r));
  }

  addSubcategory(catID: string, name: string) {
    console.log("Added a subcategory");
    this.api.CreateSubcategory({catID, name}).then(r => console.log(r));
  }

  /**
   * We did not have time to do cleaner implementation. Too Bad ;).
   * @param id 
   */
  deleteSubcategory(id: string) {
    console.log("deleting posts")
    this.deletePosts(id);

    console.log("Deleted a subcategory");
    this.api.DeleteSubcategory({id}).then(r => console.log(r));
  }

  deleteSubcategories(id: string) {
    this.api.ListPosts().then(query => {
      query.items.forEach(sub => {
        if(sub.subID === id) {
          let subID: string = sub.id;
          this.deletePosts(sub.id)
          console.log(sub.id);
          this.api.DeletePost({id: subID}).then(e => console.log(e));
        }
      });
    });
  }

  deletePosts(id: string) {
    this.api.ListPosts().then(query => {
      query.items.forEach(post => {
        if(post.subID === id) {
          let postID: string = post.id;
          this.deleteComments(post.id)
          console.log(post.id);
          this.api.DeletePost({id: postID}).then(e => console.log(e));
        }
      });
    });
  }

  deleteComments(id: string) {
    this.api.ListComments().then(query => {
      query.items.forEach(comment => {
        if(comment.postID === id) {
          let commentID: string = comment.postID;
          console.log(comment.id);
          this.api.DeletePost({id: commentID}).then(e => console.log(e));
        }
      });
    });
  }
}
