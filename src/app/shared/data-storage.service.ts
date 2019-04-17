import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/models';

import { backend } from '../config.json';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  storeRecipes() {
    return this.http.put(
      `${backend}/recipes.json`,
      this.recipesService.getRecipes()
    );
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(`${backend}/recipes.json`)
      .pipe(
        map(recipes => {
          for (const recipe of recipes) {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
          }

          return recipes;
        })
      )
      .subscribe(recipes => this.recipesService.setRecipes(recipes));
  }
}
