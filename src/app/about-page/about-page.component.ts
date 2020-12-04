import { Component, OnInit } from '@angular/core';
import aboutData from '../../assets/json/aboutUs.json';

interface Item {
  values: string[];
}

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  // used to store the about page data, fetched from .json files
  item: Item = aboutData;

  ngOnInit() {

  }
}
