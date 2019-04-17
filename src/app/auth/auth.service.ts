import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth, initializeApp } from 'firebase';
import { from } from 'rxjs';

import { firebase as firebaseConfig } from '../config.json';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  initFirebaseAuth() {
    initializeApp({ ...firebaseConfig });
  }

  signupUser(email: string, password: string) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.log(error));
  }

  getAuthToken() {
    return from(auth().currentUser.getIdToken());
  }

  isAuthenticated() {
    return auth().currentUser !== null;
  }

  logout() {
    return from(auth().signOut()).subscribe(() =>
      this.router.navigate(['/auth/signin'])
    );
  }
}
