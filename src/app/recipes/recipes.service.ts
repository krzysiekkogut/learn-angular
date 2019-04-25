import { Subject } from 'rxjs';

import { Ingredient } from './../shared/models';
import { Recipe } from './models';

export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel - just awesome!',
      'https://thestayathomechef.com/wp-content/uploads/2018/03/German-Schnitzel-3-small.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://www.readersdigest.ca/wp-content/uploads/sites/14/2015/11/gourmet-burger-1024x666.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
