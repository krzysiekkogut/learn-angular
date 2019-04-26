import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import * as AuthActions from './../store/auth.actions';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {
  constructor(private store: Store<AppState>) {}

  onSignin(form: NgForm) {
    this.store.dispatch(new AuthActions.TrySignin(form.value));
  }
}
