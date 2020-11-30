import { Component, OnInit, Output } from '@angular/core';
import { Event } from '../../types/event';
import { APIService } from '../API.service';
import { LoginService } from '../service/login-service';

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  events: Event[];
  constructor(private api: APIService, private login: LoginService) {}

  async ngOnInit() {
    this.api.ListEvents().then(event => {
      this.events = event.items;
    });
    await this.login.checkLogin();
  }
}
