import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from './../../shopping-list/store/shopping-list.actions';
import { AppState } from './../../store/app.reducers';
import { Recipe } from './../models';
import { RecipesService } from './../recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params.id, 10);
      this.recipe = this.recipesService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
