import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';
import { AuthService } from './../../auth/auth.service';
import { State } from './../../auth/store/auth.reducers';
import { DataStorageService } from './../../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authState: Observable<State>;

  private subscription: Subscription = new Subscription();

  constructor(
    private dataStorageService: DataStorageService,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSaveData() {
    this.subscription.add(
      this.dataStorageService
        .storeRecipes()
        .subscribe(() => console.log('Data saved.'))
    );
  }

  onFetchData() {
    this.subscription.add(this.dataStorageService.fetchRecipes());
  }

  onLogout() {
    return this.authService.logout();
  }
}
