import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showRecipes = true;

  constructor(private authService: AuthService) {}

  onNavigationChanged(target: string) {
    this.showRecipes = target === 'recipes';
  }

  ngOnInit(): void {
    this.authService.initFirebaseAuth();
  }
}
