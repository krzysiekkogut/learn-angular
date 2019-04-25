import { ActionReducerMap } from '@ngrx/store';
import { authReducer, State as AuthState } from './../auth/store/auth.reducers';
import {
  shoppingListReducer,
  State as ShoppingListState
} from './../shopping-list/store/shopping-list.reducers';

export interface AppState {
  shoppingList: ShoppingListState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: authReducer
};
