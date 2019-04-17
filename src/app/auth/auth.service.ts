import { auth, initializeApp } from 'firebase';
import { from } from 'rxjs';

import { firebase as firebaseConfig } from '../config.json';

export class AuthService {
  get;
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
      .then(r => console.log(r))
      .catch(error => console.log(error));
  }

  getAuthToken() {
    return from(auth().currentUser.getIdToken());
  }

  isAuthenticated() {
    return auth().currentUser !== null;
  }
}
