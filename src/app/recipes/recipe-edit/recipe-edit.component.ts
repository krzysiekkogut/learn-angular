import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducers';
import * as RecipesActions from '../store/recipes.actions';
import { Recipe } from './../models';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.editMode = !!params.id;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(
        new RecipesActions.UpdateRecipe({
          index: this.id,
          updatedRecipe: this.recipeForm.value
        })
      );
    } else {
      this.store.dispatch(new RecipesActions.AddRecipes(this.recipeForm.value));
    }

    this.onCancel();
  }

  getIngredientsControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['./../'], { relativeTo: this.route });
  }

  private initForm() {
    this.getRecipeToEdit().subscribe(
      ({ name, imagePath, description, ingredients }) => {
        this.recipeForm = new FormGroup({
          name: new FormControl(name, Validators.required),
          imagePath: new FormControl(imagePath, Validators.required),
          description: new FormControl(description, Validators.required),
          ingredients: new FormArray(
            ingredients.map(
              ingredient =>
                new FormGroup({
                  name: new FormControl(ingredient.name, Validators.required),
                  amount: new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                  ])
                })
            )
          )
        });
      }
    );
  }

  private getRecipeToEdit(): Observable<Recipe> {
    return this.editMode
      ? this.store.select('recipes').pipe(map(state => state.recipes[this.id]))
      : of(new Recipe('', '', '', []));
  }
}
