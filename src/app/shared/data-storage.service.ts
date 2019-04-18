import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { Recipe } from '../recipes/models';
import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from './../auth/auth.service';

import { backend } from '../config.json';

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService,
    private authService: AuthService
  ) {}

  storeRecipes(): Observable<Recipe[]> {
    return this.authService.getAuthToken().pipe(
      mergeMap(token => {
        return this.http.put<Recipe[]>(
          `${backend}/recipes.json`,
          this.recipesService.getRecipes(),
          {
            params: new HttpParams().append('auth', token)
          }
        );
      })
    );
  }

  fetchRecipes() {
    return this.authService.getAuthToken().subscribe(token => {
      this.http
        .get<Recipe[]>(`${backend}/recipes.json`, {
          params: new HttpParams().append('auth', token)
        })
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
    });
  }
}
