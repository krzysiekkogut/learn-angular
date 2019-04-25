import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  constructor(private authService: AuthService) {}

  onSignup(form: NgForm) {
    const { email, password } = form.value;
    this.authService.signupUser(email, password);
  }
}
