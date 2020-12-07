import { Component, OnInit } from '@angular/core';
import { Event } from '../../types/event';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})

export class EventPageComponent implements OnInit {

  events: Event[];

  constructor(private api: APIService, private login: LoginService) {}

  /**
   * Fetching events from the database
   * Also checking the login status after fetching the events
   */
  async ngOnInit() {
    // Fetching the list of events
    this.api.ListEvents().then(event => {
      this.events = event.items;
    });
    // Checking login status
    await this.login.checkLogin();
  }
}
