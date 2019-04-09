import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../models';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  onAddToShoppingList() {
    this.recipesService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
