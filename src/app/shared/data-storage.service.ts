import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { backend } from './../config.json';
import { Recipe } from './../recipes/models';
import { RecipesService } from './../recipes/recipes.service';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  storeRecipes(): Observable<Recipe[]> {
    return this.http.put<Recipe[]>(
      `${backend}/recipes.json`,
      this.recipesService.getRecipes()
    );
  }

  fetchRecipes() {
    return this.http
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
