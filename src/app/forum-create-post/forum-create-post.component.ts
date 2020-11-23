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
  titles: String[];
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
    this.titles = [];
    for(let i:number=0;i<this.subcategories.length;i++) {
      if(this.subcategories[i].catID === id) {
        this.titles.push(this.subcategories[i].name);
      }
    }
  }

  addItem() {
    for(let i:number=0;i<this.titles.length;i++) {
      if(this.subcategories[i].catID === id) {
        this.titles.push(this.subcategories[i].name);
      }
    }
  }
}


