import { Component, OnInit} from '@angular/core';
import { LoginService } from '../service/login-service';
import { APIService } from '../API.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-event-page',
  templateUrl: './single-event-page.component.html',
  styleUrls: ['./single-event-page.component.css']
})

export class SingleEventPageComponent implements OnInit {

  id: string;
  name: string;
  venue: string;
  genre: string;
  actors: string;
  description: string;
  startDate: string;
  endDate: string;
  time: string;
  reviewsUrl: string;

  constructor(private api: APIService, private login: LoginService, private route: ActivatedRoute) {}

  /**
   * Checks the login status
   * Fetching event data and storing it in the variables above
   */
  ngOnInit() {
    this.login.checkLogin();

    this.api.ListSubcategorys({name: {eq: 'Reviews'}}).then((res) => {
      this.reviewsUrl = res.items[0].id;
    });


    this.id = this.route.snapshot.paramMap.get('id');
    this.api.GetEvent(this.id).then(event => {
      this.name = event.name;
      this.venue = event.venue;
      this.genre = event.genre;
      this.actors = event.actors;
      this.description = event.description;
      this.startDate = event.startDate;
      this.endDate = event.endDate;
      this.time = event.time;
    });
  }
}
