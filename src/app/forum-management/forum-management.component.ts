import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    this.api.ListSubcategorys().then(subcategory => {
      this.subcategories = subcategory.items;
    });
  }

  onChange(id: string) {
    this.subOptions = [];
    for(let i = 0; i < this.subcategories.length; i++) {
      if (this.subcategories[i].catID === id) {
        this.subOptions.push(this.subcategories[i]);
      }
    }

  }

  addCategory() {
    console.log("Added a category");
  }

  deleteCategory() {
    console.log("Deleted a category");
  }

  addSubcategory() {
    console.log("Added a subcategory");
  }

  deleteSubcategory() {
    console.log("Deleted a subcategory");
  }

}
