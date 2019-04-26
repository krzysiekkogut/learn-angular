import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { AppState } from './../../store/app.reducers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private store: Store<AppState>) {}

  onSignup(form: NgForm) {
    this.store.dispatch(new AuthActions.TrySignup(form.value));
  }
}
