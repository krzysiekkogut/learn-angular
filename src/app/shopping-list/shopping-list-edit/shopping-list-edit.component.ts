import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Ingredient } from './../../shared/models/ingredient';
import * as ShoppingListActions from './../store/shopping-list.actions';
import * as fromShoppingList from './../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  editMode: boolean;
  editedItem: Ingredient;

  private subscription: Subscription;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(state => {
      if (state.editedIngredientIndex >= 0) {
        this.editedItem = state.editedIngredient;
        this.editMode = true;
        this.form.setValue({ ...this.editedItem });
      } else {
        this.editMode = false;
        this.editedItem = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEditIngredient());
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const newIngredient = new Ingredient(
      this.form.value.name,
      parseInt(this.form.value.amount, 10)
    );
    if (this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient(newIngredient)
      );
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }

    this.onClear();
  }

  onClear() {
    this.form.resetForm();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
}
