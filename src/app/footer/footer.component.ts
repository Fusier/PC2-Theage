import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: string;

  constructor() {}

  /**
   * Assigns the current year to the footer
   **/
  ngOnInit() {
    this.year = new Date().getFullYear().toString();
  }
}
