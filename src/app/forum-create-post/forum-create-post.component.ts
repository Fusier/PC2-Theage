import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs-compat/operator/filter';
import { Subcategory } from 'src/types/subcategory';
import { Category } from '../../types/category';
import { APIService } from '../API.service';

@Component({
  selector: 'app-forum-create-post',
  templateUrl: './forum-create-post.component.html',
  styleUrls: ['./forum-create-post.component.css']
})
export class ForumCreatePostComponent implements OnInit {
  categories: Category[];
  subcategories: Subcategory[];
  subOptions: Subcategory[];
  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    this.api.ListSubcategorys().then(subcategory => {
      this.subcategories = subcategory.items;
    });
  }

  onChange(id) {
    this.subOptions = [];
    for (const i of this.subcategories) {
      if (i.catID === id) {
        this.subOptions.push(i);
      }
    }
  }

  addItem(subID: string, title: string, content: string) {
    this.api.CreatePost({content, subID, title});
  }
}


