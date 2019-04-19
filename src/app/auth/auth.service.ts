import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import 'firebase/app';

import { from } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private router: Router, private fireAuth: AngularFireAuth) {}

  signupUser(email: string, password: string) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    this.fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.log(error));
  }

  getAuthToken() {
    return from(this.fireAuth.auth.currentUser.getIdToken());
  }

  isAuthenticated() {
    return this.fireAuth.auth.currentUser !== null;
  }

  logout() {
    return from(this.fireAuth.auth.signOut()).subscribe(() =>
      this.router.navigate(['/auth/signin'])
    );
  }
}
