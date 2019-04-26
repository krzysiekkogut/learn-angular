import { Recipe } from '../models';
import { Ingredient } from './../../shared/models/';
import * as RecipesActions from './recipes.actions';

export interface RecipesState {
  recipes: Recipe[];
}

export const initialState: RecipesState = {
  recipes: []
};

export function recipeReducer(
  state = initialState,
  action: RecipesActions.RecipesActions
): RecipesState {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };

    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };

    case RecipesActions.UPDATE_RECIPE:
      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = action.payload.updatedRecipe;
      return {
        ...state,
        recipes: updatedRecipes
      };

    case RecipesActions.DELETE_RECIPE:
      const recipesAfterDelete = [...state.recipes];
      recipesAfterDelete.splice(action.payload, 1);
      return {
        ...state,
        recipes: recipesAfterDelete
      };

    default:
      return state;
  }
}
