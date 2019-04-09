import { EventEmitter } from '@angular/core';
import { Recipe } from './models';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First recipe',
      'It\'s only a test',
      'https://s0.dziennik.pl/pliki/10420000/10420181-tofu-900-554.jpg'
    ),
    new Recipe(
      'Second recipe',
      'It\'s only a test',
      'https://s0.dziennik.pl/pliki/10420000/10420181-tofu-900-554.jpg'
    )
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
