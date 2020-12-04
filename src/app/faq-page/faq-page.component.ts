import { Component, OnInit } from '@angular/core';
import faqData from '../../assets/json/faqData.json';
import { LoginService } from '../service/login-service';

interface Item {
  title: string;
  questions: string[];
  answers: string[];
}

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})

export class FaqComponent implements OnInit {
  constructor(private login: LoginService) {}

  // used to store the faq page data
  items: Item[] = faqData;

  ngOnInit() {
    this.login.checkLogin();
  }
}
