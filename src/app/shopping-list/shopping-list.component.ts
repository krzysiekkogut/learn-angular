import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { Ingredient } from './../shared/models';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private store: Store<AppState>) {}
  state: Observable<{ ingredients: Ingredient[] }>;

  private subscription = new Subscription();

  ngOnInit() {
    this.state = this.store.select('shoppingList');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onItemClick(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEditIngredient(index));
  }
}
