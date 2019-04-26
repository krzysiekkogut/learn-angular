import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list.routing-module';
import { shoppingListReducer } from './store/shopping-list.reducers';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
    StoreModule.forFeature('shoppingList', shoppingListReducer)
  ],
  exports: [ShoppingListComponent],
  providers: []
})
export class ShoppingListModule {}
