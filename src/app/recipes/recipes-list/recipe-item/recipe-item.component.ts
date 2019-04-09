import { Component, Input } from '@angular/core';
import { Recipe } from '../../models';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) {}

  onClick() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
