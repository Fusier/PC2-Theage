import { Component, OnInit } from "@angular/core";
import faqData from '../../assets/json/faqData.json';

interface Item {
  title: String;
  questions: String[];
  answers: String[];
}

@Component({
  selector: "app-faq-page",
  templateUrl: "./faq-page.component.html",
  styleUrls: ["./faq-page.component.css"]
})
export class FaqComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  items: Item[] = faqData;
}
