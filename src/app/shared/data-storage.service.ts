import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, take, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../store/app.reducers.js';
import { backend } from './../config.json';
import { Recipe } from './../recipes/models';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  storeRecipes(): Observable<Recipe[]> {
    return this.store.select('recipes').pipe(
      take(1),
      switchMap(recipes =>
        this.http.put<Recipe[]>(`${backend}/recipes.json`, recipes)
      )
    );
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${backend}/recipes.json`).pipe(
      map(recipes => {
        for (const recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }

        return recipes;
      })
    );
  }
}
