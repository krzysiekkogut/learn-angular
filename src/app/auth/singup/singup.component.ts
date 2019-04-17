import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    const { email, password } = form.value;
    this.authService.signupUser(email, password);
  }
}
