import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import 'firebase/app';
import { from, Observable } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authSingnup: Observable<AuthActions.AuthActions> = this.actions.pipe(
    ofType(AuthActions.TRY_SIGNUP),
    map(action => action.payload),
    switchMap(({ email, password }) =>
      from(this.fireAuth.auth.createUserWithEmailAndPassword(email, password))
    ),
    switchMap(() => from(this.getUserToken())),
    mergeMap(token => {
      this.router.navigate(['/']);
      return [new AuthActions.SetToken(token), new AuthActions.Singup()];
    })
  );

  @Effect()
  authSignin: Observable<AuthActions.AuthActions> = this.actions.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    map(action => action.payload),
    switchMap(({ email, password }) =>
      from(this.fireAuth.auth.signInWithEmailAndPassword(email, password))
    ),
    switchMap(() => from(this.getUserToken())),
    mergeMap(token => {
      this.router.navigate(['/']);
      return [new AuthActions.SetToken(token), new AuthActions.Singin()];
    })
  );

  @Effect({ dispatch: false })
  authLogout: Observable<AuthActions.Logout> = this.actions.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => this.router.navigate(['/']))
  );

  constructor(
    private actions: Actions<AuthActions.AuthActions>,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {}

  private getUserToken(): Promise<string> {
    return this.fireAuth.auth.currentUser.getIdToken();
  }
}
