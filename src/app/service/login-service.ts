import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private router: Router) {}

  async checkLogin() {
    try {
      (await Auth.currentSession()).getIdToken();
    } catch (error) {
      console.log(error);
      await this.router.navigate(['/start-page']);
    }
  }

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
