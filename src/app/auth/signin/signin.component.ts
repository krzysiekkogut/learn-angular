import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { AppState } from './../../store/app.reducers';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  constructor(private store: Store<AppState>) {}

  onSignin(form: NgForm) {
    this.store.dispatch(new AuthActions.TrySignin(form.value));
  }
}
