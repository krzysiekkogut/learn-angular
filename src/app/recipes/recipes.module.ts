import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes.routing-module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RecipesRoutingModule
  ],
  exports: [],
  providers: []
})
export class RecipesModule {}
