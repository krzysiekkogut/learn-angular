import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {
  constructor(private authService: AuthService) {}

  onSignin(form: NgForm) {
    const { email, password } = form.value;
    this.authService.signinUser(email, password);
  }
}
