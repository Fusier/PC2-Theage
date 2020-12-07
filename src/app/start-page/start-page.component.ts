import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})

export class StartPageComponent implements OnInit {

  @ViewChild('email') inputUser;
  @ViewChild('password') inputPass;
  @ViewChild('loginbtn') loginbtn;
  error: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * Handling the validation of input fields before logging the user in
   * Displays an error upon finding invalid data
   */
  async signIn() {
    try {
      const user = await Auth.signIn(this.inputUser.nativeElement.value, this.inputPass.nativeElement.value)
        .then(r => console.log(r));
      if (user !== null) {
        this.router.navigate(['/home'], );
      }
    } catch (error) {
      this.error = true;
      console.log('error signing in', error);
    }
  }
}
