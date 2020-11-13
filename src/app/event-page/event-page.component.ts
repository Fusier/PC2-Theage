import { Component, OnInit, Output } from '@angular/core';
import { Event } from "../../types/event";

@Component({
  selector: 'app-event',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
  events: Event[];
  constructor() {}

}
