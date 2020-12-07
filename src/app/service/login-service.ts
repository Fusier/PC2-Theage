import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private router: Router) {}

  /**
   * Checking the login status of the user, returns the user to the start page upon failing
   */
  async checkLogin() {
    try {
      (await Auth.currentSession()).getIdToken();
    } catch (error) {
      console.log(error);
      await this.router.navigate(['/start-page']);
    }
  }

  /**
   * Tries to check the admin status of the user, callback method called
   * with different variable depending on result
   */
  checkAdminStatus(callback: (result: boolean) => any) {
    Auth.currentSession().then(session => {
      try {
        callback(session.getIdToken().decodePayload()['cognito:groups'].includes('Admin'));
      } catch (error) {
        callback(false);
      }
    });
  }
}
