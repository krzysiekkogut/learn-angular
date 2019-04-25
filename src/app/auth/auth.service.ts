import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import 'firebase/app';
import { from } from 'rxjs';
import { AppState } from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private store: Store<AppState>
  ) {}

  signupUser(email: string, password: string) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.Singup());
        this.setTokenAndNavigateToStartPage();
      })
      .catch(error => console.log(error));
  }

  signinUser(email: string, password: string) {
    this.fireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.Singin());
        this.setTokenAndNavigateToStartPage();
      })
      .catch(error => console.log(error));
  }

  logout() {
    return from(this.fireAuth.auth.signOut()).subscribe(() => {
      this.store.dispatch(new AuthActions.Logout());
      this.router.navigate(['/auth/signin']);
    });
  }

  private setTokenAndNavigateToStartPage() {
    this.fireAuth.auth.currentUser.getIdToken().then(token => {
      this.store.dispatch(new AuthActions.SetToken(token));
      this.router.navigate(['/']);
    });
  }
}
