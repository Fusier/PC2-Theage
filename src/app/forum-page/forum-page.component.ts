import { Component, OnInit } from '@angular/core';
import { Category } from '../../types/category';
import { Subcategory } from '../../types/subcategory';
import { APIService } from '../API.service';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumComponent implements OnInit {
  text: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit,\n' +
    'fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?';
  array = new Array(3);

  categories: Category[];
  subCategories: Subcategory[];

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListCategorys().then(category => {
      this.categories = category.items;
    });
    this.api.ListSubcategorys().then(subcategory => {
      this.subCategories = subcategory.items;
    });
  }

}
