import { Component } from '@angular/core';
import { Recipe } from './models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onSelectedRecipeChanged(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
