import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthRoutingModule } from './auth.routing-module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthEffects } from './store/auth.effects';
import { authReducer } from './store/auth.reducers';

@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forRoot([AuthEffects])
  ],
  exports: [AuthRoutingModule],
  providers: []
})
export class AuthModule {}
