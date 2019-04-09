import { RecipesService } from './recipes.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }
}
