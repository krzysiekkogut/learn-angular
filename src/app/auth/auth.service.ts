import { auth, initializeApp } from 'firebase';
import { firebase as firebaseConfig } from '../config.json';

export class AuthService {
  initFirebaseAuth() {
    initializeApp({ ...firebaseConfig });
  }

  signupUser(email: string, password: string) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }
}
