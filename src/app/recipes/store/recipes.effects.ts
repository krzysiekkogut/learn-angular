import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { DataStorageService } from './../../shared/data-storage.service';
import * as RecipeActions from './recipes.actions';

@Injectable()
export class RecipesEffects {
  @Effect()
  recipesFetch: Observable<RecipeActions.SetRecipes> = this.actions.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(() => this.dataStorageService.fetchRecipes()),
    map(recipes => new RecipeActions.SetRecipes(recipes))
  );

  @Effect({ dispatch: false })
  recipesStore: Observable<RecipeActions.StoreRecipes> = this.actions.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    tap(() => this.dataStorageService.storeRecipes())
  );

  constructor(
    private actions: Actions,
    private dataStorageService: DataStorageService
  ) {}
}
