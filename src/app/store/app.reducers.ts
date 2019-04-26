import { ActionReducerMap } from '@ngrx/store';
import * as auth from './../auth/store/auth.reducers';
import * as recipes from './../recipes/store/recipes.reducers';
import * as shoppingList from './../shopping-list/store/shopping-list.reducers';

export interface AppState {
  shoppingList: shoppingList.ShoppingListState;
  auth: auth.AuthState;
  recipes: recipes.RecipesState;
}

export function defaultReducer<T>(state: T) {
  return state;
}

export const initialReducerMap = {
  auth: defaultReducer,
  recipes: defaultReducer,
  shoppingList: defaultReducer
} as ActionReducerMap<AppState>;

export const initialState: AppState = {
  auth: auth.initialState,
  recipes: recipes.initialState,
  shoppingList: shoppingList.initialState
};
