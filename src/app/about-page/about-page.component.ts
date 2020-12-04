import { Component, OnInit } from '@angular/core';
import faqData from '../../assets/json/faqData.json';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  constructor() {}

  // used to store the about page data
  items: Item[] = faqData;

  ngOnInit() {

  }
}
